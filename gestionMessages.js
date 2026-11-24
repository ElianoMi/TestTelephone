import { ecrans, state, dateFormat } from './data.js';
import { afficher, initGesture } from './useful.js';

export function triMessages(messages) {
    let messagesTries = new Map();

    for (let m of messages) {
        if ( !messagesTries.has( m[0] )) messagesTries.set( m[0] ,  []);
        messagesTries.get( m[0] ).push({ reçu : m[1], message : m[2], date : m[3] });
    }//les messages sont maintenant regroupés par contacts

    messagesTries.forEach(value => {value.sort((a, b) => a.date - b.date); } );//les messages sont regroupés par contacts, le plus récent en bas

    messagesTries = new Map([...messagesTries].sort(([, listA], [, listB]) => listB.at(-1).date - listA.at(-1).date ));//les messages sont triés, la conversation la plus récente en haut

    return messagesTries;
};

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
};

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
    section.className = 'cache ecran noselect ouverture';

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
};

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
};