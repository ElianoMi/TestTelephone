import { ecrans, lastEcrans } from './data.js';

export function afficher(n) {
    const liste_ecrans = document.querySelectorAll(".ecran");

    liste_ecrans.forEach( ecran => {
        ecran.classList.toggle("cache", ecran.id !== n);
    });

    const ecranActif = ecrans.find(e => e.id === n);
    const telephone = document.getElementById("telephone");
    telephone.style.background = (ecranActif?.screen)
        ? `url('./Images/Fronts/${ecranActif?.screen}.jpg') center/cover`
        : "lightblue";
    if (ecranActif?.messages) {
        const l = document.querySelector(`#${n} .contacts`);
        l.scrollTop = l.scrollHeight;
    }
    if (n.startsWith("Conv")) {
        const l = document.querySelector(`#${n} .messages`);
        l.scrollTop = l.scrollHeight;
    }
    lastEcrans.push(n);
    if (n === "accueil") lastEcrans.splice(0, lastEcrans.length, "accueil");

    fitTime();
};

export const updateTime = () => {
    const t=new Date();
    const time = `${String(t.getHours()).padStart(2, '0')}:${String(t.getMinutes()).padStart(2, '0')}`;
    const day = `${t.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })}`;
    const dayLong = `${t.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}`;

    const horloges = document.querySelectorAll('time');
    horloges.forEach( horloge => {
        const heure = horloge.querySelector('h2');
        if (heure !== null) heure.textContent = time;
        else horloge.textContent = time;

        const jour = horloge.querySelector('h3');
        if (jour !== null) jour.textContent = (horloge.classList.contains('big'))
            ? day
            : dayLong;
    });
};

export function fitTime() {
    const tel = document.getElementById('telephone');
    const longueur = tel.clientWidth;

    const ecransActifs = document.querySelectorAll('.ecran:not(.cache)');
    
    ecransActifs.forEach(ecran => {
        const time = ecran.querySelector('.time');
        if (!time) return;

        const h2 = time.querySelector('h2');
        const h3 = time.querySelector('h3');
        const meteo = ecran.querySelector('.meteo');
        
        const cible = time.classList.contains('big') ? (longueur / 2.5) : (longueur / 3);
        
        let tailleH2 = 0;
        let tailleH3 = 0;

        if (h2 !== null) {
            const currentSize = parseFloat(window.getComputedStyle(h2).fontSize);
            tailleH2 = currentSize * (cible / h2.offsetWidth);
            h2.style.fontSize = tailleH2 + 'px';
        }

        if (h3 !== null) {
            const currentSize = parseFloat(window.getComputedStyle(h3).fontSize);
            tailleH3 = currentSize * (cible / h3.offsetWidth);
            h3.style.fontSize = tailleH3 + 'px';
        }

        if (meteo !== null) {
            const img = meteo.querySelector('.img-meteo');
            
            if (time.classList.contains('big')) {
                img.style.height = tailleH3 + 'px';
                meteo.style.fontSize = tailleH3 + 'px';
            } 
            else {
                img.style.height = tailleH2 + 'px';
                meteo.style.fontSize = tailleH3 + 'px';
            }
        }
    });
}

export function triMessages(messages) {
    let messagesTries = [];

    for (let m of messages) {
        const index = messagesTries.findIndex(mess => mess[0] === m[0]);
        if (index !== -1) {
            messagesTries[index][1].push([m[1], m[2], m[3]]);
        }
        else {
            messagesTries.push([m[0], [[m[1], m[2], m[3]]]]);
        }
    }//les messages sont maintenant regroupés par contacts

    messagesTries = messagesTries.map(groupe => {
        const contacts = groupe[0];
        const messages = groupe[1];
        messages.sort((a, b) => a[2] - b[2]);
        return [contacts, messages];
    });//les messages sont regroupés par contacts, le plus récent en bas

    messagesTries.sort((groupeA, groupeB) => {
        const dateRecentA = groupeA[1][groupeA[1].length - 1][2];
        const dateRecentB = groupeB[1][groupeB[1].length - 1][2];
        return dateRecentB - dateRecentA;
    });//les messages sont triés, la conversation la plus récente en haut

    return messagesTries;
}