import { initGesture } from './gesture.js';
import { afficher } from './useful.js';
import { state } from './data.js';

export function creerWidget() {
    const widgetbar = document.createElement("div");
    widgetbar.id = "widgetBar";
    widgetbar.className = 'widgetBar';
    
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
    signalStrength.src = './Images/Logos/SignalStrength.png';
    statusBar.appendChild(signalStrength);

    const Wifi = document.createElement("img");
    Wifi.id = "wifi";
    Wifi.className = 'status';
    Wifi.src = './Images/Logos/Wifi.png';
    statusBar.appendChild(Wifi);

    const battery = document.createElement("img");
    battery.id = "battery";
    battery.className = 'status';
    battery.src = './Images/Logos/Batterie.png'
    statusBar.appendChild(battery);
    widgetbar.appendChild(statusBar);

    return widgetbar;
}

export function creerNav() {
    const SVG_NS = "http://www.w3.org/2000/svg";

    const navbar = document.createElement("div");
    navbar.id = "navBar";
    navbar.className = 'navBar cache';


    const previous = document.createElementNS(SVG_NS, "svg");
    previous.id = "previous";
    previous.classList.add('triangle');
    previous.setAttribute("viewBox", "0 0 100 100");
    const polygone = document.createElementNS(SVG_NS, "polygon");
    polygone.setAttribute("points","20,50 85,85 85,10");
    previous.appendChild(polygone);
    navbar.appendChild(previous);

    initGesture(previous, (gesture) => {
        if (gesture === 'Tap' && state.lastEcrans.at(-1) !== "accueil") {
            state.lastEcrans.pop();
            afficher(state.lastEcrans.at(-1));
            if (state.lastEcrans.at(-1) !== "accueil") state.lastEcrans.pop();
        }
    });


    const home = document.createElementNS(SVG_NS, "svg");
    home.id = "acc";
    home.classList.add('rond');
    home.setAttribute("viewBox", "0 0 100 100");
    const rond = document.createElementNS(SVG_NS, "circle");
    rond.setAttribute("cx", "50");
    rond.setAttribute("cy", "50");
    rond.setAttribute("r", "40");
    home.appendChild(rond);
    navbar.appendChild(home);

    initGesture(home, (gesture) => {
        if (gesture === 'Tap') {afficher("accueil");}
    });


    const app = document.createElementNS(SVG_NS, "svg");
    app.id = "app";
    app.classList.add('carre');
    app.setAttribute("viewBox", "0 0 100 100");
    const rect = document.createElementNS(SVG_NS, "rect");
    rect.setAttribute("x", "15");
    rect.setAttribute("y", "15");
    rect.setAttribute("width","70");
    rect.setAttribute("height", "70");
    app.appendChild(rect);
    navbar.appendChild(app);

    initGesture(app, (gesture) => {
        if (gesture === 'Tap') {afficher("accueil");}
    });


    return navbar;
}