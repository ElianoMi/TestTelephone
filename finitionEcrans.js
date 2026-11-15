import { apps } from './data.js';
import { afficher, initGesture } from './useful.js';

function remplirCase (bloc, col ) {
    for (const i of col){
        if (i) bloc.appendChild(i);
        else bloc.appendChild(document.createElement("div"));
    }
};

export function formeAccueil() {
    const accueil = document.getElementById("accueil");
    const horloge = accueil.querySelector('.en-tete-ecran');
    const boutons = accueil.querySelector('.conteneur');

    const pos = new Map;
    pos.set( 1, [0, 0, 0, 0]);
    pos.set( 2, [0, 0, 0, 0]);
    pos.set( 3, [0, 0, 0, 0]);
    pos.set( 4, [0, 0, 0, 0]);
    pos.set( 5, [0, 0, 0, 0]);
    pos.set( 6, [0, 0, 0, 0]);
    pos.set( 7, [0, 0, 0, 0]);
    //pos.set( 8, [0, 0, 0, 0]);

    const blocAppli2 = document.createElement("div");
    blocAppli2.className = 'accueil-conteneur';

    if (horloge) accueil.insertBefore(blocAppli2, horloge);
    else {
        if (boutons) accueil.insertBefore(blocAppli2, boutons);
        else accueil.appendChild(blocAppli2);
    }

    //L'horloge occupe environ 2 rangées
    //Le titre occupe environ 1 rangée
    //Les boutons occupent environ 1 rangée
    //Il reste 4 rangés
    const blocAppli5 = document.createElement("div");
    blocAppli5.className = 'accueil-conteneur';

    const blocAppli6 = document.createElement("div");
    blocAppli6.className = 'accueil-conteneur';

    const blocAppli7 = document.createElement("div");
    blocAppli7.className = 'accueil-conteneur';
    const spaceBar = document.createElement("div");
    spaceBar.className = 'spaceBar';
    blocAppli7.appendChild(spaceBar);

    //const blocAppli8 = document.createElement("div");
    //blocAppli8.className = 'accueil-conteneur';
    
    for( const a of apps ) {
        const app = document.createElement("div");
        app.className = 'app';
        const logoApp = document.createElement("img");
        logoApp.src = `./Images/Logos/${a.icon}.png`;
        logoApp.className = 'appLogo';
        logoApp.style.background = a.background;
        const nomApp = document.createElement("span");
        nomApp.textContent = a.titre;
        app.appendChild(logoApp);
        app.appendChild(nomApp);

        const row = pos.get(a.position[0]);
        const column = a.position[1] - 1;
        row[column] = app;

        initGesture(app, (gesture) => {
            if (gesture === 'Tap') {
                afficher(a.id);
            }
        });
    }

    remplirCase(blocAppli2, pos.get(2));
    remplirCase(blocAppli5, pos.get(5));
    remplirCase(blocAppli6, pos.get(6));

    if (boutons) {
        accueil.insertBefore(blocAppli5, boutons);
        accueil.insertBefore(blocAppli6, boutons);
        accueil.insertBefore(blocAppli7, boutons);
        //accueil.insertBefore(blocAppli8, boutons);
    }
    else {
        accueil.appendChild(blocAppli5);
        accueil.appendChild(blocAppli6);
        accueil.appendChild(blocAppli7);
        //accueil.appendChild(blocAppli8);
    }
}