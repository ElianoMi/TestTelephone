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
        messages: [
            ["Luc", 1, "Message reçu", new Date(2026, 10, 11, 23, 25)], //1: message reçu ; 0: message envoyé    
            ["Luc", 1, "Deux messages reçus à la suite", new Date(2026, 10, 3, 22, 28)],
            ["Luc", 0, "Message aléatoire pour tester le scroll", new Date(2025, 4, 8, 0, 0)],

            ["Maman", 1, `Joyeux anniversaire mon coeur !
Je t'aime fort, bisous !`, new Date(2005, 10, 26, 23, 25)],
            ["Maman", 0, "👍", new Date(2025, 10, 26, 23, 25)],

            ["Stessy", 0, "Hola ! Bon, comme mon receuil est quasiment fini, je vais me lancer dans un petit projet pour essayer de faire connaitre un peu mes poèmes, voir si ils plaisent... Je t'en parlerai plus quand on se verra !", new Date(2026, 2, 10, 0, 0)],
            ["Stessy", 0, `Salut ! Alors déjà, j'ai écrit un nouveau poème (que j'ai déjà posté). Comme la dernière fois tu m'avais dit qu'ils te plaisaient... 
Ensuite, je voulais te dire que ça y est, j'ai pris une decision : si jamais je continue d'avoir des retours positifs, je vais voir pour publier un receuil complètement. Voila voila !`, new Date(2025, 4, 2, 0, 0)],
            ["Stessy", 0, "Coucou ! C'était juste pour te prévenir que j'ai écris un nouveau poème. Si ça t'intéresse de le lire...", new Date(2023, 10, 1, 0, 0)],
            ["Stessy", 0, "Coucou ! Oui, je me suis enfin lancé finalement 😅 Après je te préviens, ils sont pas tous joyeux mdrr", new Date(2023, 9, 20, 0, 15)],
            ["Stessy", 1, "Coucouu, ouii j'ai vu !! Par contre je confirme ils sont pas joyeux 😂 Mais ils sont bien écrit je trouve, t'as bien fait de les poster !!", new Date(2023, 11, 27, 0, 0)],
            ["Stessy", 1, "Coucouuu ! J'ai vu que tu t'était enfin décidé à te faire un compte Wattpad ! Ce soir je me dépèche de lire ce que tu as mis !", new Date(2023, 9, 20, 0, 0)],

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
        titre: "Bienvenus !",
        background: "navy",
        titleColor: "white",
        text: `Bien le bonjour tout le monde ! Je me présente, Eliano Migliore, votre humble serviteur.

Je n'ai jamais été doué pour parler de moi, donc je vais faire simple et efficace 😅

Je suis un grand touche-à-tout, j'aime bricoler, écrire, la robotique et l'électronique, le cosplay et les produits dérivés, la programmation et l'informatique...
Enfin bref, beaucoup de choses, et toujours plein d'idées et de domaines que j'aimerais étudier et pratiquer.

Après avoir vu un projet similaire à celui-ci, je me suis dit que c'était une bonne occasion pour apprendre de nouveaux langages informatiques, de nouvelles méthodes de programmation, et surtout d'avoir enfin un nouveau projet !
Mais surtout, c'est aussi un bon moyen de commencer à montrer un peu qui je suis et de faire parler de moi.

L'objectif est de promouvoir un peu mes poèmes, car au fil des années j'ai écrit, d'abord un peu, et de plus en plus, jusqu'à arriver à presque un recueil entier. Alors j'aimerais en profiter pour réaliser un de mes plus grands rêves : publier un premier livre !!
Car écrire représente beaucoup pour moi. Lire était à l'époque ma seule échappatoire, je passais mon temps à dévorer les romans, et écrire aidait à canaliser mon imagination débordante. Puis en grandissant, j'ai eu de plus en plus de mal à parler, de façon générale, et là encore écrire est devenu ma seule façon de réussir à m'exprimer et à me libérer quand une situation devenait trop pesante.
C'est pour cela que je me force aujourd'hui à concrétiser ce projet avec vous !!

Mon but est aussi de me forcer à m'ouvrir aux inconnus (mes amis témoigneront que je n'ai jamais été doué pour ça...) en espérant que cela me donne la motivation d'avancer dans mes autres projets ; mais surtout de faire partager mes passions : car j'ai découvert ce que j'aimais un peu au hasard, donc j'aimerais à mon tour faire partager ces possibilités !

Enfin, si tout cela vous intéresse, ou si le projet vous a plu, n'hésitez pas à laisser un mot ! (Et si ça vous a VRAIMENT plu, vous avez également la possibilité de donner un peu pour soutenir le projet !)

MERCI DE VOTRE ATTENTION !!!`,},
    {id: "note",
        titre: "Note",
        background: "black",
        titleColor: "white",
        note: [
            ["Prologue", `Tandis que la vie est souvent brute avec nous,
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
            ["Solitude", `Sentiment recurrent, sentiment étouffant
Sentiment de solitude, toujours présent
Jamais ne me laisse, jamais il ne se lasse
Toujours, caché, il me guette, quoi que je fasse.

Caché dans un repas en solitaire
Caché dans la vue d'un couple au lointain
Caché, rendant tout les instants amers
Caché, mais pour autant jamais très loin.

Malgré tout mes efforts pour y échapper,
Il parvient toujours à me rattraper.
Malgré mes essais pour me persuader
Que ce n'est qu'une impression, que c'est faux,
Ce sentiment parvient à me rattraper,
Et, à force de répéter ses assauts,
Me plonge dans la mélancolie.

Comment puis-je donc vaincre un tel adversaire ?
Cet ennemi qui toujours me persécute...
Comment puis-je donc remporter cette guerre ?
Guerre qui finira par causer ma chute...
Comment donc surmonter cet acharnement,
Vaincre de tels assauts indéfiniment,
Lorsque tout mes efforts sont toujours vains,
Quand, malgré tout, il vainc toujours à la fin,
Quand toutes mes tentatives sont échecs,
Et que toujours il me pousse à la défaite ?

Ô toi solitude, qu'est-je donc bien fait
Pour que jamais tu ne me laisses en paix ?
Pour que je sente ta présence partout ?
Je capitule et me rend, céde à tes coups.
Je ne peux plus lutter. Tu as donc gagné.
Fais donc alors de moi tout ce qu'il te plaît.`],
            ["Fatigue de la Vie", `Fatigue, pesant fardeau, entrave perfide,
Telle un serpent de plomb, large, lourd et avide,
Elle s'abat sur moi, m'emprisonnes et aspire
Toute motivation, résistance et désir.
Elle n'épargne rien, s'attaque à tout, sans limite
Ronge, ronge et ronge encore, rien ne résiste,
Fatigue de tout, amis, travaille, famille,...
Fatigue de tout, jusqu'en elle même la vie.

Ô lassitude, toi qui en tout lieux la suis,
Toi qui partout, l'aide à accomplir son travail,
Peut-tu, ô toi, me dire où se situe la faille ?
Comment échapper votre étreinte qui m'asphyxie ?
Me soustraire à votre poison qui m'affaiblis ?
Fatigué d'être las, las d'être fatigué,
Votre duo parfait jusqu'à bout m'a tout pris,
Je me laisse à vous, voilà, vous avez gagné.`],
            ["Encore une Année", `L'année se termine, et, comme toutes les années,
C'est une année de plus à rechercher ma moitié,
Ma moitié qui, si elle existe, est très bien cachée...
Encore une année, seul, sans personne pour m'aimer,
Une année encore sans personne à mes côtés,
Une année sans personne qui puisse m'épauler,
Une année de plus, sans personne à pouvoir aimer.
Un Noël supplémentaire qui s'est écoulé,
Sans que je n'ai personne avec qui le partager;
Une nouvelle année de plus qui va s'achever,
Sans n'avoir personne pour minuit à embrasser...
Encore une année, célibataire déprimé,
J'attends l'amour, sans, toutefois, jamais le trouvé...`],
            ["Ode à une Inconnue", `Je ne te connais même pas
Et pourtant je t'aime déjà
Un jour peut être viendra
Où vraiment tu existeras
Mais tant que ce n'est pas le cas
Dans mes pensées tu resteras
Occupant mes nuits et mes jours
Me torturant si tendrement
Car dans ma tête tes mamours
Me pèsent en fait terriblement.
Ton absence se fait sentir
Et devient presque insupportable,
La douleur dans mon cœur empire
Jusqu'à en être insurmontable.

J'ai tant envie de toi à mes côtés
Tant envie de t'avoir au près de moi
Tant envie te sentir m'enlacer,
Sentir ta tendresse, juste une fois;
Ressentir tes câlins au doux matin,
Et la douceur de ta main dans ma main,
Sentir le long mon dos tes cheveux
Quand contre moi je te sers tendrement,
Ou entendre ton rire chaleureux
Qui dans mon cœur raisonne gaiement

Mais ne pouvant que te penser
Ces choses ne seront jamais
Et ma douleur se concrétise,
Et mon cœur à chaque fois se brise
Me faisait mal physiquement
Et me détruisant mentalement
Car je sais bien que tu n'es pas
Et que jamais tu ne seras`],
            ["Mal Secret", `Vous me voyez de loin, je souris et je ris
Je m'amuse et plaisante, je semble épanoui
Je m'adapte aisément malgré quelques défis,
Vous pensez ça de moi: ce n'est pas qui je suis;

Je porte ce masque pour cacher une peine,
Une peine dévorante qui m'enchaîne,
Une peine épuisante qui toujours me draine
Et me creuse le cœur sans relâche avec haine.

Et je voudrais crier,
Hurler ce qui me pèse;
Et je voudrais pleurer,
Mais rien, rien ne m'apaise...
Je ne sais comment faire
Pour m'en débarrasser
Je ne sais que me taire,
Voici mon mal secret

Je me sens seul dans un monde pas fait pour moi,
Jamais à ma place, peu importe où je sois,
Je ne ressens plus rien, ni tristesse ni joie,
Qu'une immense peine qui flambloie et me broie...

Et je voudrais crier,
Hurler ce qui me pèse;
Et je voudrais pleurer,
Mais rien, rien ne m'apaise...
Je ne sais comment faire
Pour m'en débarrasser
Je ne sais que me taire,
Voici mon mal secret

Et dans ce monde, je ne peux plus avancer,
La solitude m'empêche de continuer,
L'espoir d'un futur meilleur c'est évaporé :
Je me retrouve seul, désorienté, défait...

Et je voudrais crier,
Hurler ce qui me pèse;
Et je voudrais pleurer,
Mais rien, rien ne m'apaise...
Je ne sais comment faire
Pour m'en débarrasser
Je ne sais que me taire,
Voici mon mal secret

Et je voudrais crier
...
Et je voudrais pleurer
...
Je ne sais comment faire
...
Je ne sais que me taire,
Voici mon mal secret...

Voici mon mal secret...

Mal qui a triomphé.`],
            ["Le Poids du Temps", `Le réveil sonne à peine, et déjà elle commence,
A peine éveillé elle résonne en violence
Ne me laissant jamais ni répit ni silence,
Et je quitte un cauchemar contre un plus immense.
Je voudrai rester là, juste un temps, juste un peu,
Faire comme si ne rien était, refermer mes yeux,
Ceder enfin à ce poids lourd et douloureux,
Tout envoyer balader, mais je ne le peux.
Alors je continue.

Par habitude je vérifie; rien du tout,
Pas de nouvelles, rien, le poids devient plus lourd.
Je met la musique, plus fort, je me rend sourd
Mais elle est toujours là, cette voix, couvrant tout.
Alors je continue.
Je vis ma journée, j'essaie de ne pas penser,
Mais elle est toujours là, et jamais ne se tait
Usant contre moi mes doutes, peurs et ratés,
Alourdissant ce poids que je dois supporter
Alors je continue.

La journée passe, mais pas de nouvelles, encore,
Je rentre chez moi, fatigué, traînant mon corps
Et je continue.
La voix continue, sans relâche, sans temps mort,
Je songe à tout stopper, cette voix, cette effort,
Mais je continue.
L'espoir qu'elle se taise un jours s'éteint sans relâche,
Mais je continue.
Et combien de temps avant que mon corps ne lâche ?
Mais je continue.
J'avance toujours, terminant tâche après tâche,
Et je continue.
Je n'ai plus ni envie, ni bonheur, ni rattache,
Mais je continue.

Encore, je continue.
Toujours, je continue.
Tel un robot, mais je continue.
Dans la douleur, mais je continue.
Jusqu'au jour où je ne pourrais plus...
Mais pour l'instant, je continue.

Il est l'heure, je peux me reposer enfin,
Alléger quelque peu ce poids qui me contraint,
Baisser un peu le son de cette voix sans fin,
Oublier cette vie, quelques instants du moins...
Je me sens partir pour une autre nuit sans rêve
Du moins si j'en ai la chance durant cette trêve,
Sans nouvelle, mais au moins aucune est mauvaise,
Je profite de cette pause, même brève,
Et si je m'en relève, je continuerai.`],
            ["Le Temps Passe", `Le temps passe, toujours, et nous entraîne
Déroulant ainsi les fils de nos vies.
Mais que sommes nous dans ce grand tas de laine,
Que serons nous quand tous sera fini ?

Ce souviendra-t-on encore de nous,
Laisserons-nous donc de nous quelques traces
Ou oublieront-ils donc de nos vie, tout
Telle une petite étoile dans l'espace ?

Aurons nous, dans notre si courte vie
Une occasion de rentrer dans l'Histoire ?
Si tu veux, je te livre mon avis :
Vie, et garde au fond de toi cette espoir
Car, avec le temps passant, il n'y a pas d'échapatoire.`],
            ["Nature, Si Belle", `Un ciel d'un bleu lumineux s'étendait au loin
Piqueté de beaux nuages blancs moutonneux
Et d'un éblouissant soleil, chaud et radieux,
Rafraîchi par la brise fraîche avec grand soin.
L'herbe verte s'étirait jusqu'à l'horizon
Jonché de quelques fleurs colorant ce tableau,
Et bordé d'arbres, tant somptueux qu'ancetraux,
Apportant sérénité, calme et protection.

Le vent dans mes oreilles jouait sa mélodie,
Sa mélodie parfaite qui me berce tant,
Sa douce caresse tranquille m'apaisant
Sur ce tendre lit d'herbe, douillet petit nid.
Je ferme mes yeux l'espace d'un court instant
Et m'imagine flotter dans cette mer bleue,
Libre comme l'air, apaisé, calme et heureux;
Je reste comme ça, sans me soucier du temps.
Tandis que mon esprit vagabonde au lointain
Le soleil sur ma peau apporte sa chaleur,
Me réchauffant aussi bien le corps que le cœur,
Sous le regard des arbres et de leur doux parfum.

Le temps passe, le jour se couche doucement
Dans un éblouissant fond orange-rosé,
Nous laissant, avant de partir, époustouflé,
Puis céde alors sa place à la nuit arrivant.
Celle-ci s'élève dans le ciel, accompagnée
De ses milliers d'étoiles scintillantes au loin,
Nuée de lucioles sur ce drap noir satin,
Me plongeant dans le monde des rêves enchantés`],
            ["Il Momento Piano", `Je rentre vidé de cette journée chargée,
Mes batteries à plat, l'envie m'ayant quitté;
Dans ma tête, mes pensées cavalent effrénés,
Se heurtent et s'emmêlent sans jamais s'arrêter.
Dans cette cacophonie de pensée régnant,
Ce brouhaha de mon esprit, assourdissant,
Une musique peu à peu au loin perçant
Accordant chaque note, apaisant et calmant.

Je ferme les yeux et profite de cette paix,
Me laisse porter par ce rythme, hypnotisé
Comme flottant dans une mer de Si et Ré
Guitare ou piano chassant toutes mes pensées.
La mélodie forme une bulle qui m'entoure
Dont les murs sont des notes d'or et de velours,
Me protégeant de ce monde épuisant et lourd,
Dans ces temps de détresse me portant secours.

Et la musique s'accélère lentement,
M'emporte au loin avec elle en tourbillonnant
Comme un vol au milieu des nuages blanc,
Ses notes formant un énergique torrent.
Puis les basses surgissent, marquant la rupture,
Une énergie nouvelle en moi soudain fulgure
Je revis, ma fatigue quitte l'aventure
Seule est la musique, rien plus ne me torture.`],
            ["Elle", `Au plein cœur de la pénombre, sans espoir,
Tu es mon soleil chaleureux, réconfortant ;
Quand dans mon esprit tout est brouillé, flou et noir,
Juste te voir met de l'ordre immédiatement.
Tu reste dans mes esprits, en toi je peux voir
Des matins radieux et plein d'amusement,
De la joie et des rêves durant jusqu'au soir,
Du bonheur et réconfort éternellement.

Tu es ma motivation, mon but, mon envie,
Ma raison d'exister, de sortir de mon lit,
Mon unique pensée, mon objectif de vie,
Tu es tout pour moi, tant qu'aucun mot ne suffit.
Te voir me suffit pour retrouver du bonheur,
Ton sourire efface les peines sur mon cœur,
Ta voix est mélodie apaisant toute peur,
Jamais je n'ai désiré avec tant d'ardeur...

Je rêve de toi, endormi comme éveillé,
Ton omniprésence m'empêche de penser,
Ça fait mal autant que je ne peux m'en passer
Mais je ne peux m'en plaindre : Quelle douce plaie!
Je n'ai pas les mots pour dire ce que je ressens
Une telle intensité, tant de sentiments,
Tu es ma muse, mon monde, tout simplement
Et j'espère qu'un jour tu en pensera autant...`],
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