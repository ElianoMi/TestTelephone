import { ecrans, state, dateFormat } from './data.js';
import { initGesture } from './gesture.js';

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
    const messages = triMessages(ecran.messages);

    for (const [c, msg] of [...messages]) {
        const lastMsg = dateFormat.format(msg.at(-1).date);

        if ( !state.lastTriMessage.has(c) ) {
            creerContact(ecran, c, lastMsg);
            creerMessages(c, msg);
        }
        else {
            const lastMsgPrev = dateFormat.format(state.lastTriMessage.get(c).at(-1).date);
            if ( lastMsg !== lastMsgPrev ) {
                creerMessages(c, msg);
            };
        }
    }
    state.lastTriMessage = messages;

    //On tri les contacts
    const contacts = document.getElementById(ecran.id).querySelector('ul');
    for (const c of messages.keys()) {
        contacts.appendChild(state.dataParing.get(c)[0])
    };
}

function creerContact (ecran, name, dateLastMsg) {
    const contacts = document.getElementById(ecran.id).querySelector('ul');
    const telephone = document.getElementById("telephone");

    state.lastId++;
    const idConv = "Conv" + state.lastId.toString();

    //On créé la page de messages associé au nouveau contact
    const section = document.createElement("section");
    ecrans.push({
        titre : name,
        noNavigation: true,
        id : idConv,
        screen : "messages",
        ignore : true,
    })
    section.id = idConv;
    section.className = 'cache ecran noselect';

    const h1 = document.createElement("h1");
    h1.textContent = name;
    section.appendChild(h1);

    const ul = document.createElement("ul");
    ul.className = 'messages';
    section.appendChild(ul);

    //On ajoute la page au téléphone
    const navBar = document.getElementById("navBar");
    if (navBar)  telephone.insertBefore(section, navBar);
    else telephone.appendChild(section);

    //On ajoute le nouveau contact à la liste
    const conteneur = document.createElement("li");
    conteneur.dataset.contact = name;
    conteneur.className = 'contact';
    state.dataParing.set(name, [conteneur, idConv]);

    const contact = document.createElement("span");
    contact.textContent = name;
    conteneur.appendChild(contact);
    
    const date = document.createElement("span");
    date.className = 'dateMsg1';
    date.textContent = dateLastMsg;
    conteneur.appendChild(date);

    initGesture(conteneur, (gesture) => {
        if (gesture === 'Tap') {afficher(idConv);}
    });

    contacts.appendChild(conteneur);
}

function creerMessages (name, msg) {
    const idEcran = state.dataParing.get(name)[1];
    const ul = document.getElementById(idEcran).querySelector('ul');
    ul.replaceChildren();

    for(const m of msg) {
        const li = document.createElement("li");
        const received = m.reçu;
        li.className = (received) ? "message-recu" : "message-envoye";

        const message = document.createElement("span");
        message.className = (received) ? "msg-recu" : "msg-envoye";
        message.textContent = m.message;
        li.appendChild(message);

        const date = document.createElement("span");
        date.className = 'dateMsg2 cache';
        date.textContent = dateFormat.format(m.date);
        li.appendChild(date);

        initGesture(li, (gesture) => {
            if (gesture === 'Tap') date.classList.toggle("cache");
        });

        ul.appendChild(li);
    }

    //On actualise le temps du last message sur le contact
    const lastMsg = dateFormat.format(msg.at(-1).date);
    const contact = state.dataParing.get(name)[0];
    const date = contact.querySelectorAll('span')[1];
    date.textContent = lastMsg;
}

export function notification( txt, cible ) {
    const telephone = document.getElementById("telephone");
    let notif = document.getElementById("notif");
    if (notif) notif.remove();

    notif = document.createElement("div");
    notif.className = 'notif noselect';
    notif.id = 'notif';
    notif.textContent = txt;

    initGesture(notif, (gesture) => {
        if (gesture === 'Tap') {
            afficher(cible);
            notif.remove();
        }
    });

    telephone.appendChild(notif);

    setTimeout( () => notif.remove(), 5000);
}