import { readdir, stat, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import exifr from 'exifr';

const dossier = './Images/Galerie';
const extensionsValides = ['.jpg', '.jpeg', '.png', '.webp'];
const liste = [];
const statsExtraction = { exif: 0, nomFichier: 0, mtime: 0 };

function creerDateValide(anneeStr, moisStr, jourStr, heureStr = '0', minStr = '0', secStr = '0') {
    const annee = Number(anneeStr);
    const mois = Number(moisStr);
    const jour = Number(jourStr);
    const heure = Number(heureStr);
    const min = Number(minStr);
    const sec = Number(secStr);

    if (
        mois < 1 || mois > 12 ||
        jour < 1 || jour > 31 ||
        heure < 0 || heure > 23 ||
        min < 0 || min > 59 ||
        sec < 0 || sec > 59
    ) {
        return null;
    }

    const d = new Date(annee, mois - 1, jour, heure, min, sec);

    // Vérifie que JS n'a pas fait de report calendaire (ex: 31 février -> 3 mars)
    if (
        Number.isNaN(d.getTime()) ||
        d.getFullYear() !== annee ||
        d.getMonth() !== mois - 1 ||
        d.getDate() !== jour
    ) {
        return null;
    }

    return d;
}

function extraireDateDepuisNom(nom) {
    const matchWhatsApp = nom.match(/(\d{4})-(\d{2})-(\d{2}) at (\d{2})\.(\d{2})\.(\d{2})/);
    if (matchWhatsApp) {
        return creerDateValide(...matchWhatsApp.slice(1));
    }
    const matchStandard = nom.match(/(\d{4})(\d{2})(\d{2})[_-](\d{2})(\d{2})(\d{2})/);
    if (matchStandard) {
        return creerDateValide(...matchStandard.slice(1));
    }
    return null;
}

function estDateValide(d) {
    return d instanceof Date && !Number.isNaN(d.getTime());
}

const elements = await readdir(dossier, { withFileTypes: true });

for (const e of elements) {
    if (!e.isFile()) continue;

    const ext = extname(e.name).toLowerCase();
    if (!extensionsValides.includes(ext)) continue;

    const cheminComplet = join(dossier, e.name);
    const fileStats = await stat(cheminComplet);

    let datePhoto = null;
    let sourceDate = '';

    // 1. Tentative EXIF sur tous les formats (y compris PNG)
    try {
        const exif = await exifr.parse(cheminComplet, ['DateTimeOriginal', 'CreateDate', 'Creation Time']);
        const candidatExif = exif?.DateTimeOriginal || exif?.CreateDate || exif?.['Creation Time'];
        const dateExif = candidatExif instanceof Date ? candidatExif : (candidatExif ? new Date(candidatExif) : null);

        if (estDateValide(dateExif)) {
            datePhoto = dateExif;
            sourceDate = 'exif';
            statsExtraction.exif++;
        }
    } catch (err) {
        console.warn(`⚠️ Erreur lecture EXIF sur ${e.name} :`, err.message);
    }

    // 2. Repli sur le nom du fichier avec validation calendaire stricte
    if (!datePhoto) {
        const dateNom = extraireDateDepuisNom(e.name);
        if (estDateValide(dateNom)) {
            datePhoto = dateNom;
            sourceDate = 'nomFichier';
            statsExtraction.nomFichier++;
        }
    }

    // 3. Repli final sur mtime
    if (!datePhoto) {
        datePhoto = estDateValide(fileStats.mtime) ? fileStats.mtime : new Date();
        sourceDate = 'mtime';
        statsExtraction.mtime++;
    }

    liste.push({
        nom: e.name,
        chemin: `${dossier}/${encodeURIComponent(e.name)}`,
        date: datePhoto.toISOString(),
        sourceDate
    });
}

liste.sort((a, b) => new Date(b.date) - new Date(a.date));

await writeFile('./Images/Galerie/photos.json', JSON.stringify(liste, null, 2));
console.log(`✅ ${liste.length} photos enregistrées dans photos.json.`);
console.log(`📊 Répartition : EXIF = ${statsExtraction.exif} | Nom = ${statsExtraction.nomFichier} | mtime = ${statsExtraction.mtime}`);