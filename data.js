export const ecrans = [
    {id: "accueil", 
        titre: "No",
        horloge: true,
        swipe: 2,
        screen: "homeScreen",},
    {id: "accueil2", 
        titre: "No",
        horloge: false,
        swipe: 2,
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
                ["Amélie", 0, "Message aléatoire pour tester le scroll", new Date(2023, 9, 21, 0, 0)],

                ["Celyann", 0, "Hola! C'est juste pour prévenir que mes conversations ont toutes été effacés pour une obscure raison. Voila  voila. Oh et aussi j'ai eu une super idée de projet ! Mais je sens que je vais encore me lancer dans un truc impossible...", new Date(2026, 10, 3, 22, 28)],
                ["Celyann", 0, "Salut, comment ça va ? Dis tu aurai le mémo que le prof de traitement du signal nous as passé ?", new Date(2026, 10, 4, 18, 6)],
                ["Celyann", 1, "Pas de problème, je t'ai envoyé ça sur WhatsApp. Et sympa que tu ai réussi à te trouver un projet pour t'occuper, tu me tiendra au courant de l'avancement ?", new Date(2026, 10, 11, 12, 9)],
                ["Celyann", 0, "Okok, avec grand plaisir ! Et merci bien !!", new Date(2026, 10, 11, 16, 35)],
                ["Celyann", 1, "Salut mec, t'as eu le lire réglement de la Coupe de France de Robotique ? On verra comment on s'organise pour les équipe cette année.", new Date(2026, 10, 14, 23, 23 )],
                ["Celyann", 0, "Yep je l'ai vu, le thème est sympa ça va ! Et il faudra aussi qu'on fasse le point sur la présidence du club de Robotique quand tu aura le temps, on en discutera avec Baptiste.", new Date(2026, 10, 15, 20, 23)],
                ["Celyann", 0, "T'as vu le dernier message du prof de logique ??? Je suis SCAN-DA-LI-SE !", new Date(2026, 10, 17, 1, 19)],
                ["Celyann", 1, "Non je ne l'ai pas encore vu, je regarderai aprés sinon je risque de raté mon bus", new Date(2026, 10, 18, 19, 29)],
            ],
        screen: "messages",
    },
    {id: "galerie",
        titre:"Galerie",
        screen: "galerie"},
    {id: "google",
        screen: "google"},
    {id: "playStore",
        screen: "playStore"},
    {id: "youtubeMusic",
        screen: "youtubeMusic"},
    {id: "parametre",
        screen: "parametre"},
    {id: "note",
        titre: "Note",
        background: "black",
        titleColor: "white",
        note: [["Prologue", `Tandis que la vie est souvent brute avec nous,
Qu'elle n'a de cesse de nous faire des coups bas,
Qu'elle s'échine à vouloir nous mettre à genoux
Et que sur la violence elle ne lésine pas
Il faut savoir trouver de la joie malgré tout,
Trouver une lueur dans cette obscurité,
S'inventer une raison de rester debout
Et faire face à toutes ces difficultés.

C'est pourquoi je me suis fixé une mission :
Aider les autres à garder cette lumière,
Apporter la bonne humeur en toutes occasions,
Et les soutenir chaque fois que nécessaire.
Je me vêti donc de ce masque de bonheur
Et jamais plus alors je ne le retirais,
Je mis de côté mes propres petits malheurs
Pour me consacrer aux autres et mieux les aider.

Mais ce masque alors commença à m'étouffer
A force de ne pas pouvoir le retirer,
Et mes peines ne faisant que s'accumuler
Sans pouvoir sortir, commencèrent à déborder.
J'écris donc un poème pour évacuer,
Puis un autre viens, et encore d'autres après,
Pour constituer ce recueil, que vous lisez :
Voici donc le vrai moi, pour une fois, démasqué.

Je ne sais pas comment vous y réagirez :
Peut être que vous resterez indifférents
Peut-être que vous serez peinés, attristés,
Peut-être que vous trouverez ça exaltant.
Et peut-être même, on peux toujours espérer
Que dans ces poèmes vous vous retrouverez,
Et qu'ainsi, comme d'autres, vous partagerez
Ma vision, mes sentiments, ma réalité.`], 
],
    },
]

export const ecransVerrouillage = [
    {id: "home",
        horloge: true,
        swipe: 1,
        screen: "lockscreen",},
    {id: "noScreen", 
        swipe: 1,
        screen: "lockscreen",},
]

export const apps = [
    {id: "google", 
        icon: "googleBar", 
        position: [1, 1], 
        span: 4, 
        large: true, 
        pilule: true,
    },
    {id: "galerie",
        titre: "Photos",
        icon: "photo",
        background: "white",
        position: [6, 1], //Row 6 (sur 8); Columns 1 (sur 4) (débute à 1)
    },
    {id: "messages",
        titre: "Messages",
        icon: "messages",
        background: "white",
        position: [-1, 1],
    },
    {id: "instagram",
        titre: "Instagram",
        icon: "instagram",
        position: [2, 1],
        url: "https://www.instagram.com/eliano_eroilgim/",
    },
    {id: "playStore",
        titre: "PlayStore",
        icon: "playStore",
        background: "white",
        position: [2, 4],
    },
    {id: "youtubeMusic",
        titre: "YoutubeMusic",
        icon: "youtubeMusic",
        background: "white",
        position: [5, 1],
    },
    {id: "parametre",
        titre: "Paramètres",
        icon: "parametre",
        background: "rgb(24, 129, 197)",
        position: [7, 1],
    },
    {id: "google",
        titre: "Chrome",
        icon: "chrome",
        background: "white",
        position: [-1, 3],
    },
    {id: "youtubeMusic", 
        icon: "youtubeMusicWidget", 
        position: [8, 1], 
        span: 4,
        large: true, 
    },
    {id: "ko-fi",
        titre: "Buy Me A Coffe",
        icon: "ko-fi",
        position: [7, 4],
        url: "https://ko-fi.com/elianomigliore",
    },
    {id: "wattpad",
        titre: "Wattpad",
        icon: "wattpad",
        position: [9, 1],
        url: "https://www.wattpad.com/user/ElianoMigliore",
    },
    {id: "padlet",
        titre: "Un Petit Mot ?",
        icon: "padlet",
        position: [7, 3],
        url: "https://padlet.com/ElianoMi/UnPetitMot",
    },
    {id: "note",
        titre: "Notes",
        icon: "note",
        background: "orange",
        position: [9, 4],
    },
]

export const photos = new Map();

export const state = {
    lastEcrans: ["accueil"],
    lastTriMessage: new Map(),
    dataParing: new Map(),
    lastId: -1,
    lastNoteId: -1,
    swiper: null,
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