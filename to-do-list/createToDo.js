let newToDo = document.getElementById("newToDo");
let createToDo = document.getElementById("createToDo");
let create = document.getElementById("create");

createToDo.addEventListener('click', () => {
    newToDo.style.display = "block";

    /* petite animation avec gsap */
    gsap.from(".new-to-do", {x: "-200%", duration: 3, ease: "elastic"});
    containers.style.filter = "blur(2px)";
})


create.addEventListener('click', () => {
    // récupération des données

    let titreh1 = document.getElementById("titre");
    let typeselect = document.getElementById("typeToDo");
    let dateinput = document.getElementById("date");
    let heureinput = document.getElementById("heure");
    let informationtextarea = document.getElementById("information");

    // vérification si toutes les valeurs ont bien été rempli
    if(titreh1.value == "", dateinput.value == "", heureinput.value == "", informationtextarea.value == "")
    {   
        // déplacement de la div pour dire qu'il y a une erreur
        const timeline = gsap.timeline();
        timeline.to(".new-to-do", {x: "-5%", duration: 0.2});
        timeline.to(".new-to-do", {x: "5%", duration: 0.2});
        timeline.to(".new-to-do", {x: "0%", duration: 0.2});
        return 0;
    }

    let titre = titreh1.value;
    let type = typeselect.value;
    let date = dateinput.value;
    let heure = heureinput.value;
    let information = informationtextarea.value;

    creationToDo(titre, type, date, heure, information);

    newToDo.style.display = "none";
    containers.style.filter = "blur(0px)";
})

affichageToDo.addEventListener('click', () =>{
    newToDo.style.display = "none";
    containers.style.filter = "blur(0px)";
})