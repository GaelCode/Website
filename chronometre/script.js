let startStop = document.getElementById("startStop");
let reset = document.getElementById("reset");
let SaveTime = document.getElementById("SaveTime");
let saveTimeDiv = document.getElementById("saveTimeDiv");

let seconde = document.getElementById("seconde");
let minute = document.getElementById("minute"); 
let heure = document.getElementById("heure"); 
let debutChrono = 0;
let tempsPasse;
let secondes = 0;
let minutes = 0;
let heures = 0;

startStop.addEventListener('click', () => {
    if (debutChrono === 0) {
        debutChrono = Date.now() / 1000 - 1; // Utilisation de Date.now() pour simplifier
    } else {
        debutChrono = 0;
    }
});

reset.addEventListener('click', () =>{
    debutChrono = 0;
    tempsPasse = 0;
    secondes = 0;
    minutes = 0;
    heures = 0;
    seconde.innerText = "00";
    minute.innerText = "00";
    heure.innerText = "00";

    saveTimeDiv.innerHTML = "";
})

SaveTime.addEventListener('click', () =>{
    let newTimeElement = document.createElement("p");

    newTimeElement.innerText = `${formatage(heures)}:${formatage(minutes)}:${formatage(secondes)}`;

    saveTimeDiv.appendChild(newTimeElement);
});

function formatage(secondes) {
    return secondes < 10 ? "0" + secondes : secondes;
}

setInterval(function () {
    if(debutChrono){
        tempsPasse = Math.floor(Date.now() / 1000 - debutChrono);
        if (tempsPasse)
        {
            secondes++;
            if(secondes === 60)
            {
                secondes = 0;
                minutes++;
            }
            if(minutes === 60)
            {
                minutes = 0;
                heures++;
            }
            seconde.innerText = formatage(secondes);
            minute.innerText = formatage(minutes);
            heure.innerText = formatage(heures);
        }
    }
}, 1000);