import { photos, dateFormat } from './data.js';
import { initGesture } from './useful.js';

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
            sourceDate: item.sourceDate,
            type: item.type,
            miniature: item.miniature
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
        const cadre = document.createElement('figure');
        cadre.className = 'photo-cadre';
        
        let el;
        if (info.type === 'video') {
            el = document.createElement('video');
            el.src = `${info.chemin}#t=0.1`;
            el.preload = 'metadata';
            el.muted = true;
            el.loop = true;
            el.playsInline = true;
        }
        else {
            el = document.createElement('img');
            el.src = info.miniature ?? info.chemin;
            el.alt = nom;
            el.loading = 'lazy';
            el.decoding = 'async';
        }
        el.className = 'photo';

        const legende = document.createElement('figcaption');
        legende.className = 'legende';
        const dateTexte = info.date ? dateFormat.format(info.date) : 'date inconnue';
        legende.textContent = `${nom} : ${dateTexte}`;

        initGesture(el, (gesture) => {
            if (gesture !== 'Tap') return;
            const agrandi = cadre.classList.toggle('big');

            if (info.type === 'video') el.paused ? el.play() : el.pause();
            else el.src = agrandi ? info.chemin : (info.miniature ?? info.chemin);
        });

        cadre.appendChild(el);
        cadre.appendChild(legende);
        grille.appendChild(cadre);
    }
}