let myProject = document.querySelector(".my-Project") as HTMLDivElement

interface project{
    nom: string,
    sourceImage: string,
    sourceGitHub: string,
    description: string
}

const projects : project[] = [
    {nom :"Calculator" , sourceImage : "./assets/projet-calculatrice.png", sourceGitHub : "https://github.com/GaelCode/Website/tree/master/Calculatrice", description : "Creation of an online calculator"},
    {nom :"Stopwatch" , sourceImage : "./assets/projet-chronometre.png", sourceGitHub : "https://github.com/GaelCode/Website/tree/master/chronometre", description : "Creation of an online stopwatch"},
    {nom :"Forum" , sourceImage : "./assets/projet-forum.png", sourceGitHub : "https://github.com/GaelCode/Website/tree/master/forum_elden_ring", description : "Creation of a forum about the game Elden Ring"},
    {nom :"Portfolio" , sourceImage : "./assets/projet-portfolio.png", sourceGitHub : "https://github.com/GaelCode/Website/tree/master/Portfolio", description : "Creation of my portfolio"},
    {nom :"QuickType" , sourceImage : "./assets/projet-quicktype.png", sourceGitHub : "https://github.com/GaelCode/Website/tree/master/QuickType", description : "Creation of a website to practice typing"},
    {nom :"To-do list" , sourceImage : "./assets/projet-to-do-list.png", sourceGitHub : "https://github.com/GaelCode/Website/tree/master/to-do-list", description : "Creation of a To-Do list"}
]

for (const elt of projects){
    let newProject = document.createElement("div") as HTMLDivElement

    newProject.innerHTML = `
        <a href=${elt.sourceGitHub} target="_blank">
            <h3>${elt.nom}</h3> 
        </a>
        <p style="visibility: hidden">${elt.description}</p>
    `
    newProject.style.background = `url(${elt.sourceImage}) no-repeat center`
    newProject.classList.add("project")
    myProject.appendChild(newProject)
}
