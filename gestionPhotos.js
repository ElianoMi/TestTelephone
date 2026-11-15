import { photos } from './data.js';

export async function chargerPhotos() {
    const reponse = await fetch('./Images/Galerie/photos.json');

    if (!reponse.ok) {
        throw new Error(`Impossible de charger photos.json (HTTP ${reponse.status})`);
    }

    const liste = await reponse.json();
    photos.clear();

    for (const item of liste) {
        const dateParsed = item.date ? new Date(item.date) : null;
        const dateValide = dateParsed && !Number.isNaN(dateParsed.getTime()) ? dateParsed : null;

        photos.set(item.nom, {
            chemin: item.chemin,
            date: dateValide,
            sourceDate: item.sourceDate
        });
    }

    return photos;
}

export function actualiserGalerie() {
    const section = document.getElementById("galerie");
    if (!section) return;

    let grille = section.querySelector('.photo-conteneur');
    if (!grille) {
        grille = document.createElement('div');
        grille.className = 'photo-conteneur';
        const boutons = section.querySelector('.conteneur');
        if (boutons) section.insertBefore(grille, boutons);
        else section.appendChild(grille);
    }

    grille.replaceChildren();

    for (const [nom, info] of photos) {
        const img = document.createElement('img');
        img.src = info.chemin;
        img.alt = nom;
        img.loading = 'lazy';
        img.decoding = 'async';
        img.className = 'photo';
        grille.appendChild(img);
    }
}