import { apps } from './data.js';
import { afficher, initGesture } from './useful.js';

function creerApp(a) {
    const [ligne, colonne] = a.position;
    const largeur = a.span ?? 1;
    const hauteur = a.hauteur ?? 1;
    // Rangée -1 = barre du bas (1 seule rangée). Sinon on revient à 1..6 par page.
    const ligneLocale = (ligne === -1) ? 1 : ((ligne - 1) % 6) + 1;

    const app = document.createElement("div");
    app.className = 'app';
    app.style.gridColumn = `${colonne} / span ${largeur}`;
    app.style.gridRow = `${ligneLocale} / span ${hauteur}`;

    const logoApp = document.createElement("img");
    logoApp.style.setProperty('--hauteur', hauteur);
    logoApp.src = `./Images/Logos/${a.icon}.png`;
    logoApp.className = 'appLogo';
    if (a.large) logoApp.classList.add('large');
    if (a.pilule) logoApp.classList.add('pilule');
    if (a.background) logoApp.style.background = a.background;
    app.appendChild(logoApp);

    if (a.titre) {
        const nomApp = document.createElement("span");
        nomApp.textContent = a.titre;
        app.appendChild(nomApp);
    }

    initGesture(app, (gesture) => {
        if (gesture === 'Tap') {
            if (a.url) open(a.url, "_blank", "noopener");
            else afficher(a.id);
        }
    });
    return app;
}

function creerGrille() {
    const grille = document.createElement("div");
    grille.className = 'accueil-grille';
    grille.style.setProperty('--lignes', 6);
    return grille;
}

export function formeAccueil() {
    const accueil = document.getElementById("accueil");
    const accueil2 = document.getElementById("accueil2");
    const horloge = accueil.querySelector('.en-tete-ecran');
    const pagination = accueil.querySelector('.swiper-pagination');
    const pagination2 = accueil2.querySelector('.swiper-pagination');
    const bottomAccueil = document.getElementById("bottomAccueil");

    const pages = [creerGrille(), creerGrille()];

    if (horloge) {
        horloge.style.gridArea = "3 / 1 / span 2 / -1"; // rangées 3-4, toutes les colonnes
        pages[0].appendChild(horloge);
    }

    for (const a of apps) {
        const ligne = a.position[0];
        if (ligne === -1) {
            bottomAccueil.appendChild(creerApp(a));
            continue;
        }
        const page = Math.floor((ligne - 1) / 6);
        if (!pages[page]) {
            console.warn(`App "${a.id}" ignorée : rangée ${ligne} hors limites`);
            continue;
        }
        pages[page].appendChild(creerApp(a));
    }

    accueil.insertBefore(pages[0], pagination);
    accueil2.insertBefore(pages[1], pagination2);
}