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
        messages: [ [1, "Message reçu"], //1: message reçu ; 0: message envoyé
                [0, "Message envoyé"],
                [1, "Un encore plus long message reçu qui permet de voir ce qu'il se passe quand le texte dépasse l'écran"],
                [1, "Deux messages reçus à la suite"],
                [0, "Une réponse assez longue aussi, pour tester encore une fois le risque d'overflow."],
                [0, "Message aléatoire pour tester le scroll"],
                [1, "Message aléatoire pour tester le scroll"],
                [0, "Message aléatoire pour tester le scroll"],
                [1, "Message aléatoire pour tester le scroll"],
                [0, "Message aléatoire pour tester le scroll"],],},
    {id: "galerie",
        titre:"Galerie",},
    {id: "parametres",
        titre:"Paramètres",},
]

export let lastEcrans = ["accueil"];