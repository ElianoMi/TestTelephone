import { ecrans, state } from './data.js';

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
        actualiserMessages(ecranActif);
        const l = document.querySelector(`#${n} .contacts`);
        l.scrollTop = 0;
    }
    if (n.startsWith("Conv")) {
        const l = document.querySelector(`#${n} .messages`);
        l.scrollTop = l.scrollHeight;
    }
    state.lastEcrans.push(n);
    if (n === "accueil") state.lastEcrans.splice(0, state.lastEcrans.length, "accueil");

    fitTime();
};

export const updateTime = () => {
    const t=new Date();
    const time = `${String(t.getHours()).padStart(2, '0')}:${String(t.getMinutes()).padStart(2, '0')}`;
    const day = `${t.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' })}`;
    const dayLong = `${t.toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long' })}`;

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
    let messagesTries = new Map();

    for (let m of messages) {
        if ( !messagesTries.has( m[0] )) messagesTries.set( m[0] ,  []);
        messagesTries.get( m[0] ).push({ reçu : m[1], message : m[2], date : m[3] });
    }//les messages sont maintenant regroupés par contacts

    messagesTries.forEach(value => {value.sort((a, b) => a.date - b.date); } );//les messages sont regroupés par contacts, le plus récent en bas

    messagesTries = new Map([...messagesTries].sort(([, listA], [, listB]) => listB.at(-1).date - listA.at(-1).date ));//les messages sont triés, la conversation la plus récente en haut

    return messagesTries;
}

export function actualiserMessages (ecran){
    const telephone = document.getElementById("telephone");
    const messages = triMessages(ecran.messages);

    for (const [c, msg] of messages) {
        if ( !state.lastTriMessage.has(c) ) { //nouveau contact : on créé la page
            state.lastId++;
            const idConv = "Conv" + state.lastId.toString();

            const section = document.createElement("section");
            ecrans.push({
                titre : c,
                noNavigation: true,
                id : idConv,
                screen : "messages",
                ignore : true,
            })
            section.id = idConv;
            section.className = 'cache ecran noselect';

            const h1 = document.createElement("h1");
            h1.textContent = c;
            section.appendChild(h1);

            const ul = document.createElement("ul");
            ul.className = 'messages';
            section.appendChild(ul);

            const navBar = document.getElementById("navBar");
            if (navBar)  telephone.insertBefore(section, navBar);
            else telephone.appendChild(section);
        }


    }

    state.lastTriMessage = messages;
}