import { ecrans, state } from './data.js';
import { initGesture } from './gesture.js';
import { afficher, triMessages } from './useful.js';

export function creerEcrans() {
    const listEcrans = [];

    for (const e of ecrans) {
        if (!e.ignore){
            const section = document.createElement("section");
            e.ignore = true;
            section.id = e.id;
            section.className = 'cache ecran noselect';

            if (e.titre) {
                const h1 = document.createElement("h1");
                h1.textContent = e.titre;
                section.appendChild(h1);
            }

            if (e.horloge) {
                const time = document.createElement("time");
                time.className = 'time';
                
                const heure = document.createElement("h2");
                const jour = document.createElement("h3");

                const meteo = document.createElement("div");
                meteo.className = 'meteo';
                const logoMeteo = document.createElement("img");
                logoMeteo.src = './Images/Logos/Meteo.png';
                logoMeteo.className = 'img-meteo';
                const temperature = document.createElement("span");
                temperature.textContent = "19°C";
                meteo.appendChild(logoMeteo);
                meteo.appendChild(temperature);
                
                time.appendChild(heure);
                time.appendChild(jour);

                if (!e.titre) {
                    time.classList.add('big');
                    time.appendChild(meteo);
                    section.appendChild(time);
                }

                else {
                    const bloc = document.createElement("div");
                    bloc.className = 'en-tete-ecran';
                    bloc.appendChild(time);
                    bloc.appendChild(meteo);
                    section.appendChild(bloc);
                };
            }

            
            if (e.messages) {
                state.lastTriMessage = triMessages(e.messages);
                const contacts = document.createElement("ul");
                contacts.className = 'contacts';
                let i = 0;
                const options = {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: false,
                    };
                const dateFormat = new Intl.DateTimeFormat(undefined, options);

                for (const [c, messages] of state.lastTriMessage) {     
                    const idConv = "Conv" + i.toString();
                    state.lastId = i;
                    const conteneur = document.createElement("li");
                    conteneur.className = 'contact';

                    const contact = document.createElement("span");
                    contact.textContent = c;

                    const ssection = document.createElement("section");
                    ecrans.push({
                        titre : c,
                        noNavigation: true,
                        id : idConv,
                        screen : "messages",
                        ignore : true,
                    })
                    ssection.id = idConv;
                    ssection.className = 'cache ecran noselect';
                    const h1 = document.createElement("h1");
                    h1.textContent = c;
                    ssection.appendChild(h1);

                    const ul = document.createElement("ul");
                    ul.className = 'messages';

                    for(const m of messages) {
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
                    
                    ssection.appendChild(ul);
                    listEcrans.push(ssection);

                    conteneur.appendChild(contact);

                    const date = document.createElement("span");
                    date.className = 'dateMsg1';
                    date.textContent = dateFormat.format(messages.at(-1).date);
                    conteneur.appendChild(date);

                    initGesture(conteneur, (gesture) => {
                        if (gesture === 'Tap') {afficher(idConv);}
                    });

                    contacts.appendChild(conteneur);
                    i++;
                }
                section.appendChild(contacts);
            }

            const div2 = document.createElement("div");
            div2.className = 'conteneur';
            if (!e.noNavigation) {
                for (const ec of ecrans) {
                    if (ec.id === e.id) continue;
                    if (ec.noNavigation) continue;
                    const button = document.createElement("button");
                    button.className = 'bouton';
                    button.textContent = ec.titre;
                    button.onclick = () => afficher(ec.id);

                    div2.appendChild(button);
                }
            }
            section.appendChild(div2);

            listEcrans.push(section);
        }
    }
    return listEcrans;
}