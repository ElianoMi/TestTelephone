import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { ecrans, photos } from './data.js';
import { afficher, initGesture } from './useful.js';

export async function listePhotos () {
    const file = './Images/Galerie';
    try {
        // 1. Lire le contenu du dossier
        const elements = await readdir(file, { withFileTypes: true });

        for (const e of elements) {
        // Ignorer les sous-dossiers (ne garder que les fichiers)
            if (e.isFile()) {
                const cheminComplet = join(file, e.name);
                
                // 2. Récupérer les métadonnées du fichier
                const stats = await stat(cheminComplet);

                photos.set(e.name, stats.birthtime);
            }
        }
        console.log(photos);
    }
     
    catch (err) {
        console.error('Erreur lors de la lecture du dossier :', err);
    }
}