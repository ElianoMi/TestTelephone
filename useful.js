import { ecrans, state } from './data.js';
import { actualiserMessages } from './gestionMessages.js';
import { actualiserGalerie } from './gestionPhotos.js';

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
    if (ecranActif?.id === "galerie") {
        actualiserGalerie();
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
};

function handleGesture(deltaX, deltaY) {
    let lastGesture = "";
    if (Math.abs(deltaX) > 25) lastGesture = (deltaX < 0) ? 'Left' : 'Right';
    if (Math.abs(deltaY) > 25) lastGesture += (deltaY < 0) ? 'Up' : 'Down';
    if (Math.abs(deltaX) <= 25 && Math.abs(deltaY) <= 25 ) lastGesture = "Tap";

    return lastGesture;
};

export function initGesture(element, callback) {
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    
    element.addEventListener('pointerdown', function (event) {
        startX = event.screenX;
        startY = event.screenY;
    }, false);

    element.addEventListener('pointerup', function (event) {
        endX = event.screenX;
        endY = event.screenY;
        const gesture = handleGesture(endX-startX, endY-startY);
        if (callback) callback(gesture);
    }, false);
};

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