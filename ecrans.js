export function creerEcrans(ecrans) {
    const listEcrans = [[], []];

    for (const e of ecrans) {
        if (!e.ignore){
            const section = document.createElement("section");
            e.ignore = true;
            section.dataset.swipe = String(e.swipe);
            section.id = e.id;
            section.className = 'cache ecran noselect';
            if ( e.swipe ) section.classList.add('swiper-slide');

            if (e.titre && e.titre !== "No") {
                const h1 = document.createElement("h1");
                h1.textContent = e.titre;
                if (e.titleColor) h1.style.color = e.titleColor;
                section.appendChild(h1);
            }

            if (e.horloge) {
                const time = document.createElement("time");
                time.className = 'time';
                
                const heure = document.createElement("h2");
                const jour = document.createElement("h3");

                const meteo = document.createElement("div");
                meteo.className = 'meteo';
                const logoMeteo = document.createElement("img");
                logoMeteo.src = './Images/Logos/Meteo.png';
                logoMeteo.className = 'img-meteo';
                const temperature = document.createElement("span");
                temperature.textContent = "19°C";
                meteo.appendChild(logoMeteo);
                meteo.appendChild(temperature);
                
                time.appendChild(heure);
                time.appendChild(jour);

                if (!e.titre) {
                    time.classList.add('big');
                    time.appendChild(meteo);
                    section.appendChild(time);
                }

                else {
                    const bloc = document.createElement("div");
                    bloc.className = 'en-tete-ecran';
                    bloc.appendChild(time);
                    bloc.appendChild(meteo);
                    section.appendChild(bloc);
                };
            }

            if (e.messages) {
                const contacts = document.createElement("ul");
                contacts.className = 'contacts';
                section.appendChild(contacts);
            }
            if (e.note) {
                const note = document.createElement("ul");
                note.className = 'notes';
                section.appendChild(note);
            }
            if ( e.text ) {
                const texte = document.createElement("p");
                texte.className = "poeme";
                texte.textContent = e.text;
                section.appendChild(texte);
            }
            if (e.swipe === 2) {
                const pagination = document.createElement("div");
                pagination.className = 'swiper-pagination';
                section.appendChild(pagination);
            }
            if (e.swipe) listEcrans[0].push(section);
            else listEcrans[1].push(section);
        }
    }

    return listEcrans;
}
