// mise en page des to-do
let affichageToDo = document.querySelector(".affichage-to-do");

let personnel = document.querySelector(".personnel");
let travail = document.querySelector(".travail");
let important = document.querySelector(".important");


personnel.addEventListener('click', () => {
    afficherToDo("Personnel");
})

travail.addEventListener('click', () => {
    afficherToDo("Travail");
})

important.addEventListener('click', () => {
    afficherToDo("Important");
})

function creationToDo(titre, type, date, heure, information)
{
    let divToDo = document.createElement("div");
    divToDo.innerHTML = `<h1>${titre}</h1>
                        <div class="horaire">
                            ${date} / ${heure}h
                        </div>
                        <p>${information}</p>
                        ` 
    // Vérifier si la clé nomCompte existe dans toDo
    if (!toDo[nomCompte]) {
        toDo[nomCompte] = {}; // Si non, la créer comme un objet vide
    }

     // Vérifier si la clé du type de tâche existe
     if (!toDo[nomCompte][type]) {
        toDo[nomCompte][type] = []; // Si non, la créer comme un tableau vide
    }
    
    // Ajouter la nouvelle tâche à la liste associée au type spécifié
    toDo[nomCompte][type].push([titre, heure, date, information]);

    localStorage.setItem('toDo', JSON.stringify(toDo));

    afficherToDo(type);
}

function afficherToDo(type)
{
    affichageToDo.innerHTML = `<h1>Votre liste ${type}:</h1>`
    
    for (let i = 0; i < toDo[nomCompte][type].length; i++)
    {
        let taskElement = document.createElement("div");
        taskElement.innerHTML = `
                                <div class="premiere-ligne">
                                    <h1>${toDo[nomCompte][type][i][0]}</h1>
                                    <div class="horaire">
                                        ${toDo[nomCompte][type][i][2]} / ${toDo[nomCompte][type][i][1]}h
                                    </div>
                                </div>
                                <p>${toDo[nomCompte][type][i][3]}</p>
                                `
        taskElement.classList.add("task-element");
        affichageToDo.appendChild(taskElement)
    }
}
