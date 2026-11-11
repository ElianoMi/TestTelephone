import { afficher, updateTime, fitTime } from './useful.js';
import { initGesture } from './gesture.js';
import { ecrans } from './data.js';

const telephone = document.createElement("div");
telephone.id = "telephone";
document.body.append(telephone);

const widgetbar = document.createElement("div");
widgetbar.id = "widgetBar";
widgetbar.className = 'widgetbar';

const heure = document.createElement("time");
heure.id = "heure";
heure.className ='noselect';
widgetbar.appendChild(heure);

const spaceBar = document.createElement("div");
//spaceBar.className = "spaceBar";
widgetbar.appendChild(spaceBar);
const statusBar = document.createElement("div");
statusBar.className = 'statusBar noselect';
const signalStrength = document.createElement("img");
signalStrength.id = "signal";
signalStrength.className = 'status';
signalStrength.src = './Images/Logos/SignalStrength.png'
statusBar.appendChild(signalStrength);
const Wifi = document.createElement("img");
Wifi.id = "wifi";
Wifi.className = 'status';
Wifi.src = './Images/Logos/Wifi.png'
statusBar.appendChild(Wifi);
const battery = document.createElement("img");
battery.id = "battery";
battery.className = 'status';
battery.src = './Images/Logos/batterie.png'
statusBar.appendChild(battery);
widgetbar.appendChild(statusBar);

telephone.appendChild(widgetbar);

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
        logoMeteo.src = './Images/Logos/meteo.png';
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
        const ul = document.createElement("ul");
        ul.className = 'messages';
        for (const t of e.messages) {
            const li = document.createElement("li");
            const received = t[0];
            li.textContent = t[1];
            li.className = (received) ? "msg-recu" : "msg-envoye";
            ul.appendChild(li);
        }
        section.appendChild(ul);
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
    telephone.appendChild(section);
}
updateTime();
fitTime();
setInterval(updateTime, 1000);
setInterval(fitTime, 3600000);
afficher("home");

let firstConnect = true;
initGesture(telephone, (gesture) => {
    if (gesture === 'Up' && firstConnect) {afficher("accueil"); firstConnect = false;}
});