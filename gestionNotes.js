import { afficher, initGesture } from './useful.js';
import { ecrans, state } from './data.js';

export function actualiserNote (notes) {
    const listeNotes = notes.note;
    const telephone = document.getElementById("telephone");
    const blocNote = document.getElementById(notes.id).querySelector('ul');

    for (let note of listeNotes) {
        const n = document.createElement("li");
        n.textContent = note[0];
        n.className = "note";

        state.lastNoteId++;
        const idNote = "Note" + state.lastNoteId.toString();
        
        const section = document.createElement("section");
        ecrans.push({
            titre : note[0],
            noNavigation: true,
            id : idNote,
            background : "black",
            titleColor : "white",
            ignore : true,
        });
        section.id = idNote;
        section.className = 'cache ecran noselect';
        
        const h1 = document.createElement("h1");
        h1.textContent = note[0];
        h1.style.color = "gray";
        section.appendChild(h1);

        const text = document.createElement("p");
        text.textContent = note[1];
        text.className = "poeme";
        section.appendChild(text);

        const navBar = document.getElementById("navBar");
        if (navBar)  telephone.insertBefore(section, navBar);
        else telephone.appendChild(section);
        
        initGesture(n, (gesture) => {
            if (gesture === 'Tap') {afficher(idNote);}
        });
        
        blocNote.appendChild(n);
    }
}