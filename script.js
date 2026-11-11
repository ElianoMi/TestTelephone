import { afficher, updateTime, fitTime } from './useful.js';
import { initGesture } from './gesture.js';
import { creerWidget, creerNav } from './Bars.js';
import { creerEcrans } from './Ecrans.js'


const telephone = document.createElement("div");
telephone.id = "telephone";
document.body.append(telephone);

telephone.appendChild(creerWidget());

const listeEcrans = creerEcrans();
for (let ecran of listeEcrans) telephone.appendChild(ecran);

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
    }
});