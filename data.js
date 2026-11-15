export const ecrans = [
    {id: "home",
        //titre: "Ecran de dévérouillage",
        horloge: true,
        noNavigation: true,
        screen: "lockscreen",},
    {id: "accueil", 
        titre: "Accueil",
        horloge: true,
        screen: "homeScreen",},
    {id: "messages",
        titre:"Messages", 
        messages: [ ["Luc", 1, "Message reçu", new Date(2026, 10, 11, 23, 25)], //1: message reçu ; 0: message envoyé
                ["Amélie", 0, "Message envoyé", new Date(2026, 2, 10, 0, 0)],
                ["Maman", 1, "Un encore plus long message reçu qui permet de voir ce qu'il se passe quand le texte dépasse l'écran", new Date(2005, 10, 26, 23, 25)],
                ["Luc", 1, "Deux messages reçus à la suite", new Date(2026, 10, 3, 22, 28)],
                ["Amandine ❤️", 0, "Une réponse assez longue aussi, pour tester encore une fois le risque d'overflow.", new Date(2025, 8, 7, 10, 0)],
                ["Luc", 0, "Message aléatoire pour tester le scroll", new Date(2025, 4, 8, 0, 0)],
                ["Amélie",1, "Message aléatoire pour tester le scroll", new Date(2025, 4, 22, 0, 0)],
                ["Amélie", 0, "Message aléatoire pour tester le scroll", new Date(2023, 10, 1, 0, 0)],
                ["Amélie", 1, "Message aléatoire pour tester le scroll", new Date(2023, 11, 27, 0, 0)],
                ["Amélie", 0, "Message aléatoire pour tester le scroll", new Date(2023, 9, 21, 0, 0)],],
        screen: "messages"},
    {id: "galerie",
        titre:"Galerie",},
    {id: "parametres",
        titre:"Paramètres",},
]

export const apps = [
    {id: "galerie",
        titre: "Photos",
        icon: "photo",
        background: "white",
        position: [6, 1] //Row 6 (sur 8); Columns 1 (sur 4) (débute à 1)
    },
]

export const photos = [];

export const state = {
    lastEcrans: ["accueil"],
    lastTriMessage: new Map(),
    dataParing: new Map(),
    lastId: -1,
};

const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
};
export const dateFormat = new Intl.DateTimeFormat(undefined, options);