export function formeAccueil() {
    const accueil = document.getElementById("accueil");
    const horloge = accueil.querySelector('.en-tete-ecran');
    const boutons = accueil.querySelector('.conteneur');

    const blocAppli1 = document.createElement("div");
    blocAppli1.className = 'accueil-conteneur';

    if (horloge) accueil.insertBefore(blocAppli1, horloge);
    else {
        if (boutons) accueil.insertBefore(blocAppli1, boutons);
        else accueil.appendChild(blocAppli1);
    }

    //L'horloge occupe environ 2 rangées
    //Le titre occupe environ 1 rangée
    //Les boutons occupent environ 1 rangée
    //Il reste 4 rangés
    const blocAppli2 = document.createElement("div");
    blocAppli2.className = 'accueil-conteneur';

    const blocAppli3 = document.createElement("div");
    blocAppli3.className = 'accueil-conteneur';

    const blocAppli4 = document.createElement("div");
    blocAppli4.className = 'accueil-conteneur';
    
    const blocAppli5 = document.createElement("div");
    blocAppli5.className = 'accueil-conteneur';
    const spaceBar = document.createElement("div");
    spaceBar.className = 'spaceBar';
    blocAppli5.appendChild(spaceBar);
    
    if (boutons) {
        accueil.insertBefore(blocAppli2, boutons);
        accueil.insertBefore(blocAppli3, boutons);
        accueil.insertBefore(blocAppli4, boutons);
        accueil.insertBefore(blocAppli5, boutons);
    }
    else {
        accueil.appendChild(blocAppli2);
        accueil.appendChild(blocAppli3);
        accueil.appendChild(blocAppli4);
        accueil.appendChild(blocAppli5);
    }
}