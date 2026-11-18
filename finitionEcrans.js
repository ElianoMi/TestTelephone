import { apps } from './data.js';
import { creerGoogleBar } from './bars.js';
import { afficher, initGesture } from './useful.js';

function remplirCase (bloc, col ) {
    for (const i of col){
        if (i) bloc.appendChild(i);
        else bloc.appendChild(document.createElement("div"));
    }
};

function creerApp(a) {
    const app = document.createElement("div");
    app.className = 'app';
    const logoApp = document.createElement("img");
    logoApp.src = `./Images/Logos/${a.icon}.png`;
    logoApp.className = 'appLogo';
    if (a.background) logoApp.style.background = a.background;
    const nomApp = document.createElement("span");
    nomApp.textContent = a.titre;
    app.appendChild(logoApp);
    app.appendChild(nomApp);

    initGesture(app, (gesture) => {
        if (gesture === 'Tap') {
            if (a.url) open(a.url, "_blank", "noopener");
            else afficher(a.id);
        }
    });
    return app;
}

export function formeAccueil() {
    const accueil = document.getElementById("accueil");
    const accueil2 = document.getElementById("accueil2");
    const horloge = accueil.querySelector('.en-tete-ecran');
    const pagination = accueil.querySelector('.swiper-pagination');
    const pagination2 = accueil2.querySelector('.swiper-pagination');

    const pos = new Map;
    pos.set( 1, [0, 0, 0, 0]);
    pos.set( 2, [0, 0, 0, 0]);
    pos.set( 3, [0, 0, 0, 0]);
    pos.set( 4, [0, 0, 0, 0]);
    pos.set( 5, [0, 0, 0, 0]);
    pos.set( 6, [0, 0, 0, 0]);
    pos.set( 7, [0, 0, 0, 0]);
    pos.set( 8, [0, 0, 0, 0]);
    pos.set( 9, [0, 0, 0, 0]);
    pos.set( 10, [0, 0, 0, 0]);
    pos.set( 11, [0, 0, 0, 0]);
    pos.set( 12, [0, 0, 0, 0]);
    pos.set( 13, [0, 0, 0, 0]);
    pos.set( 14, [0, 0, 0, 0]);
    pos.set( 15, [0, 0, 0, 0]);
    pos.set( 16, [0, 0, 0, 0]);

    const blocAppli1 = document.createElement("div");
    blocAppli1.className = 'accueil-conteneur';
    blocAppli1.appendChild(creerGoogleBar());

    const blocAppli2 = document.createElement("div");
    blocAppli2.className = 'accueil-conteneur';

    //L'horloge occupe 2 rangées
    //Les boutons occupent 1 rangée
    //Il reste 5 rangés
    const blocAppli5 = document.createElement("div");
    blocAppli5.className = 'accueil-conteneur';

    const blocAppli6 = document.createElement("div");
    blocAppli6.className = 'accueil-conteneur';

    const blocAppli7 = document.createElement("div");
    blocAppli7.className = 'accueil-conteneur';
    const spaceBar = document.createElement("div");
    spaceBar.className = 'spaceBar';
    blocAppli7.appendChild(spaceBar);

    const blocAppli8 = document.createElement("div");
    blocAppli8.className = 'accueil-conteneur';

    //On continue avec accueil2
    const blocAppli9 = document.createElement("div");
    blocAppli9.className = 'accueil-conteneur';

    const blocAppli10 = document.createElement("div");
    blocAppli10.className = 'accueil-conteneur';

    const blocAppli11 = document.createElement("div");
    blocAppli11.className = 'accueil-conteneur';

    const blocAppli12 = document.createElement("div");
    blocAppli12.className = 'accueil-conteneur';

    const blocAppli13 = document.createElement("div");
    blocAppli13.className = 'accueil-conteneur';

    const blocAppli14 = document.createElement("div");
    blocAppli14.className = 'accueil-conteneur';

    const blocAppli15 = document.createElement("div");
    blocAppli15.className = 'accueil-conteneur';
    const spaceBar2 = document.createElement("div");
    spaceBar2.className = 'spaceBar';
    blocAppli15.appendChild(spaceBar2);

    const blocAppli16 = document.createElement("div");
    blocAppli16.className = 'accueil-conteneur';
    
    for( const a of apps ) {
        pos.get(a.position[0])[a.position[1] - 1] = creerApp(a);
        if (a.position[0] === 8) pos.get(16)[a.position[1] - 1] = creerApp(a);
    }

    remplirCase(blocAppli1, pos.get(1));
    remplirCase(blocAppli2, pos.get(2));
    remplirCase(blocAppli5, pos.get(5));
    remplirCase(blocAppli6, pos.get(6));
    remplirCase(blocAppli8, pos.get(8));

    remplirCase(blocAppli9, pos.get(9));
    remplirCase(blocAppli10, pos.get(10));
    remplirCase(blocAppli11, pos.get(11));
    remplirCase(blocAppli12, pos.get(12));
    remplirCase(blocAppli13, pos.get(13));
    remplirCase(blocAppli14, pos.get(14));
    remplirCase(blocAppli15, pos.get(15));
    remplirCase(blocAppli16, pos.get(16));//Dernière ligne : mêmes icones

    if (horloge) accueil.insertBefore(blocAppli2, horloge);
    else {
        if (pagination) accueil.insertBefore(blocAppli2, pagination);
        else accueil.appendChild(blocAppli2);
    }
    accueil.insertBefore(blocAppli1, blocAppli2);

    if (pagination) {
        accueil.insertBefore(blocAppli5, pagination);
        accueil.insertBefore(blocAppli6, pagination);
        accueil.insertBefore(blocAppli7, pagination);
        accueil.insertBefore(blocAppli8, pagination);
        accueil2.insertBefore(blocAppli9, pagination2);
        accueil2.insertBefore(blocAppli10, pagination2);
        accueil2.insertBefore(blocAppli11, pagination2);
        accueil2.insertBefore(blocAppli12, pagination2);
        accueil2.insertBefore(blocAppli13, pagination2);
        accueil2.insertBefore(blocAppli14, pagination2);
        accueil2.insertBefore(blocAppli15, pagination2);
        accueil2.insertBefore(blocAppli16, pagination2);
    }
    else {
        accueil.appendChild(blocAppli5);
        accueil.appendChild(blocAppli6);
        accueil.appendChild(blocAppli7);
        accueil.appendChild(blocAppli8);
        accueil2.appendChild(blocAppli9);
        accueil2.appendChild(blocAppli10);
        accueil2.appendChild(blocAppli11);
        accueil2.appendChild(blocAppli12);
        accueil2.appendChild(blocAppli13);
        accueil2.appendChild(blocAppli14);
        accueil2.appendChild(blocAppli15);
        accueil2.appendChild(blocAppli16);
    }
}