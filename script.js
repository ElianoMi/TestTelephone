import { afficher, updateTime, fitTime, notification, initGesture } from './useful.js';
import { actualiserMessages } from './gestionMessages.js';
import { chargerPhotos } from './gestionPhotos.js';
import { creerWidget, creerNav } from './bars.js';
import { creerEcrans } from './ecrans.js';
import { ecrans, state } from './data.js';
import { formeAccueil } from './finitionEcrans.js';

chargerPhotos()
    .then((mapPhotos) => console.log(`${mapPhotos.size} photos prêtes dans la galerie.`))
    .catch((err) => console.error('Échec critique du chargement des photos :', err));

const telephone = document.createElement("div");
telephone.id = "telephone";
document.body.append(telephone);

telephone.appendChild(creerWidget());

const listeEcrans = creerEcrans();
for (let ecran of listeEcrans) telephone.appendChild(ecran);
formeAccueil();

updateTime();
setInterval(updateTime, 1000);

afficher("home");

fitTime();
setInterval(fitTime, 3600000);

let firstConnect = true;
initGesture(telephone, (gesture) => {
    if (gesture === 'Up' && firstConnect) {
        afficher("accueil");
        telephone.appendChild(creerNav());
        firstConnect = false;

        const indexMsgPage = ecrans.findIndex(e => e.id === "messages");

        setTimeout( () => {
            ecrans[indexMsgPage].messages.push(["Maman", 1, "Nouveau message 1", new Date()]);
            actualiserMessages(ecrans[indexMsgPage]);
        }, 10000);

        setTimeout( () => {
            ecrans[indexMsgPage].messages.push(["Téo", 1, "Nouveau message 2", new Date()]);
            actualiserMessages(ecrans[indexMsgPage]);
            const idTeo = state.dataParing.get("Téo")[1];
            notification("1 new message : \"Téo\" (et on essaie un très long message pour un tester les effets d'un overflow)", idTeo);
        }, 15000);
    }
});

