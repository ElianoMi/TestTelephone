import { ecrans } from './data.js';
import { initGesture } from './gesture.js';
import { afficher, triMessages } from './useful.js';

export function creerEcrans() {
    const listEcrans = [];

    for (const e of ecrans) {
        const section = document.createElement("section");
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
            const listeMessages = triMessages(e.messages);
            const contacts = document.createElement("ul");
            contacts.className = 'contacts';
            let i = 0;

            for (const m of listeMessages) {
                const idConv = "Conv" + i.toString();
                const contact = document.createElement("li");
                contact.className = 'contact';
                contact.textContent = m[0];

                const ssection = document.createElement("section");
                ssection.id = idConv;
                ssection.className = 'cache ecran noselect';
                const h1 = document.createElement("h1");
                h1.textContent = m[0];
                ssection.appendChild(h1);

                const ul = document.createElement("ul");
                ul.className = 'messages';

                for(const t of m[1]) {
                    const li = document.createElement("li");
                    const received = t[0];
                    li.textContent = t[1];
                    li.className = (received) ? "msg-recu" : "msg-envoye";

                    ul.appendChild(li);
                }
                
                ssection.appendChild(ul);
                listEcrans.push(ssection);
                    
                initGesture(contact, (gesture) => {
                    if (gesture === 'Tap') {afficher(idConv);}
                });

                i++;
                contacts.appendChild(contact);
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
    return listEcrans;
}