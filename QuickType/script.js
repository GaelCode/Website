document.addEventListener('scroll', () => {
    //ecouter le scroll
    let scrollPosition = window.scrollY;
    //recuperer la valeur du scroll(de combien on est descendu) de la hauteur(Y, X pour la largeur)
    if (scrollPosition > 50) {
        //verification de si on est descendu de 200px puis on initie les changements
        let box1 = document.querySelector('header');
        box1.style.height = '150px';
        box1.style.filter = 'blur(2px)';

        let Hh1 = document.querySelector('header h1');
        Hh1.style.marginBottom = '2px';

        let box2 = document.querySelector("main");
        box2.style.height = '85vh';
        box2.style.justifyContent = 'center';

        
    }else{
        let box1 = document.querySelector('header');
        box1.style.height = '55%';
        box1.style.filter = 'blur(0px)';
        //recupere la taille qu'il avait avant
        let box2 = document.querySelector("main");
        box2.style.height = 'auto';

        let h2 = document.querySelector("h2");
        h2.classList.add("hidden-text");
        setTimeout(() =>{
            h2.classList.remove("hidden-text");
        }, 2000)
    }
})


let i = 1;
let DisplayText = document.getElementById("DisplayText");
let zoneResponse = document.getElementById("zoneResponse");
let complete = document.createElement("p");
let score = document.querySelector(".score span");
DisplayText.innerText = listParagraph[0];

let time = document.getElementById("time");
let debutChrono = 0;
let tempsPasse;


let textarea = document.querySelector("textarea");
textarea.addEventListener('keypress', (event) =>{

    if (debutChrono === 0) {
        debutChrono = new Date().getTime() / 1000 -1;
    }

    if (i === 49)
    {
        i = 0;
    }

    if (event.key === "Enter" && textarea.value.trim() !== "")
    {
        if (complete){
            complete.innerText = "";
        }
        DisplayText.innerText = listParagraph[i];
        i++;

        //calcul du wpm
        let tempsMinutes = tempsPasse / 60;
        let nombreMots = textarea.value.replace(/\s/g, '').length / 4.8;
        // \s précise tous type d'espace et g indique que la recherche doit être globale
        let WPM = nombreMots / tempsMinutes;
        score.innerText = Math.floor(WPM);

        //gérer le timer
        debutChrono = 0;
        tempsPasse = 0;
        time.innerText = tempsPasse;

        //réinitialise le textarea
        textarea.value = "";
    }
    else if (event.key == "Enter" && textarea.value.trim() === "")
    {
        if (complete){
            complete.innerText = "";
        }
        complete.innerText = "Complétez d'abord avant de confirmer.";
        complete.style.fontSize = '0.7em';
        complete.style.color = 'red';
        zoneResponse.appendChild(complete);
    }
})

// Définir le setInterval une seule fois en dehors de l'événement
setInterval(function () {
    if (debutChrono) {
        tempsPasse = Math.floor(new Date().getTime() / 1000 - debutChrono); 
        // /1000 c'est parce que on doit passer les milliseconde en seconde ; 
        // - debutChrono c'est le temps qui était de base quand on a lancé le chrono
        time.innerText = tempsPasse;
    }
}, 1000);
