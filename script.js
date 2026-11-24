import { afficher, updateTime, fitTime, notification } from './useful.js';
import { actualiserMessages } from './gestionMessages.js';
import { chargerPhotos } from './gestionPhotos.js';
import { creerWidget, creerNav, creerBottomAccueil } from './bars.js';
import { creerEcrans } from './ecrans.js';
import { ecrans, ecransVerrouillage, state } from './data.js';
import { formeAccueil } from './finitionEcrans.js';
import { actualiserNote } from './gestionNotes.js';

chargerPhotos()
    .catch((err) => console.error('Échec critique du chargement des photos :', err));

//On crée le téléphone vérrouillé, séparé des écrans du téléphone dévérouillé
const telephoneVerrou = document.createElement("div");
telephoneVerrou.id = "telephone-verrou";
telephoneVerrou.className = "swiper mySwiper1";

const wrapper1 = document.createElement("div");
wrapper1.className = "swiper-wrapper";

telephoneVerrou.appendChild(creerWidget());

const listeVerrouillage = creerEcrans(ecransVerrouillage);
for (let ecran of listeVerrouillage[0]) wrapper1.appendChild(ecran);
telephoneVerrou.appendChild(wrapper1);

document.body.append(telephoneVerrou);

var swiper1 = new Swiper('.mySwiper1', { direction: 'vertical', });

//On crée le téléphone dévérrouillé, dans lequel on restera une fois qu'on est rentré
const telephone = document.createElement("div");
telephone.id = "telephone";
telephone.className = "swiper mySwiper cache";

const wrapper = document.createElement("div");
wrapper.className = "swiper-wrapper";

telephone.appendChild(creerWidget());

const listeEcrans = creerEcrans(ecrans);
for (let ecran of listeEcrans[0]) wrapper.appendChild(ecran);
for (let ecran of listeEcrans[1]) telephone.appendChild(ecran);
telephone.appendChild(wrapper);

const pagination = document.createElement("div");
pagination.id = "pagination";
pagination.className = 'swiper-pagination';
telephone.appendChild(pagination);

telephone.appendChild(creerBottomAccueil());
telephone.appendChild(creerNav());

document.body.append(telephone);

creerBottomAccueil();
formeAccueil();

state.swiper = new Swiper('.mySwiper', {
    effect: 'creative',
    pagination: {
        el: pagination,
        dynamicBullets: true,
    },
    creativeEffect: {
        prev: { shadow: true, translate: [0, 0, -400], opacity: 0,},
        next: { translate: ['100%', 0, 0], },
    },
});

//On met les pendules à l'heure... littéralement.
//On actualise chaque secondes, pour être le moins possible en décalage avec la vraie heure.
updateTime();
setInterval(updateTime, 1000);

afficher("home", ecransVerrouillage);
swiper1.update();

//On gére la taille des horloge. Une fois par heure est suffisant car pas de gros changements
fitTime();
setInterval(fitTime, 3600000);


actualiserNote(ecrans.find(e => e.id === "note"));

//Une fois le téléphone dévérouillé, la partie commence
swiper1.on('slideChangeTransitionEnd', (swiper) => {
    telephoneVerrou.classList.add('cache');
    telephone.classList.remove('cache');

    afficher("accueil");
    state.swiper.update();

    const indexMsgPage = ecrans.findIndex(e => e.id === "messages");

    setTimeout( () => {
        ecrans[indexMsgPage].messages.push(["Nico IA", 1, `Bienvenue dans cette expérience ! Je suis Nico, votre assistant IA qui vous guidera pendant cette avanture.`, new Date()]);
        actualiserMessages(ecrans[indexMsgPage]);
        const idNico = state.dataParing.get("Nico IA")[1];
        notification("1 new message : \"Nico IA\"", idNico);
    }, 10000);
});

