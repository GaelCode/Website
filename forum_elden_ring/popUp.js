// Déclaration des variables associées aux éléments HTML
let forgotYourPassword = document.querySelector(".pop-up a");
let forgotPassword = document.getElementById("forgotPassword");
let popUp = document.getElementById("popUp");
let Containers = document.getElementById("Containers");
let pseudoValue;

// Écouteur d'événement pour le lien "Forgot your password?"
forgotYourPassword.addEventListener('click', () => {
    popUp.classList.add("not-Display");
    forgotPassword.classList.remove("not-Display");
});

// Déclaration des variables associées aux éléments HTML de la pop-up
let containersPopUp = document.getElementById("containersPopUp");
let confirmer = document.getElementById("confirmer");
let zoneErreur = document.getElementById("zoneErreur");
let mistake = false;

// Écouteur d'événement pour le bouton "Confirmer" dans la pop-up
confirmer.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération des éléments du formulaire
    let pseudo = document.getElementById("pseudo");
    let mdp = document.getElementById("motDePasse");

    // Vérification de l'authentification
    let authenticated = false;
    for (let i = 0; i < BDD.length; i++) {
        if (BDD[i][0] === pseudo.value && BDD[i][1] === mdp.value) {
            authenticated = true;
            break;
        }
    }

    // Affichage de la page principale si l'authentification réussit, sinon affiche un message d'erreur
    if (authenticated) {
        let affichagePseudo = document.getElementById("affichagePseudo");
        affichagePseudo.innerText = pseudo.value;
        pseudoValue = pseudo.value
        containersPopUp.classList.add("not-Display");
        Containers.classList.remove("not-Display");
    } else {
        zoneErreur.innerText = "Pseudo or password incorrect.";
        zoneErreur.style.color = "red";
        zoneErreur.style.fontSize = "0.8em";
    }
});

// Déclaration des variables associées aux éléments HTML de la deuxième pop-up
let confirmer2 = document.getElementById("confirmer2");
let zoneErreur2 = document.getElementById("zoneErreur2");
let exist = false;

// Écouteur d'événement pour le bouton "Confirmer" dans la deuxième pop-up
confirmer2.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération des éléments du formulaire
    let pseudo2 = document.getElementById("pseudo2");
    let mdp2 = document.getElementById("motDePasse2");
    let verification = document.getElementById("verification");

    // Vérification de l'existence du pseudo et affiche un message d'erreur si nécessaire
    let exist = false;
    for (let i = 0; i < BDD.length; i++) {
        if (pseudo2.value === BDD[i][0]) {
            exist = true;
            zoneErreur2.innerText = "Le pseudo a déjà été pris.";
            zoneErreur2.style.color = "red";
            zoneErreur2.style.fontSize = "0.8em";
            break;
        }
    }

    // Si le pseudo n'existe pas, le mot de passe n'est pas vide, et la vérification du mot de passe est correcte,
    // alors ajoute la personne à la base de données, met à jour la page web, et cache la deuxième pop-up
    if (!exist && mdp2.value !== "" && verification.value === mdp2.value) {
        let affichagePseudo = document.getElementById("affichagePseudo");
        affichagePseudo.innerText = pseudo2.value;
        pseudoValue = pseudo2.value;

        BDD.push([pseudo2.value, mdp2.value]);
        localStorage.setItem('BDD', JSON.stringify(BDD));

        containersPopUp.classList.add("not-Display");
        Containers.classList.remove("not-Display");
    }
});

// Événement déclenché lors de la fermeture ou de l'actualisation de la page
window.addEventListener("beforeunload", () => {
    containersPopUp.classList.remove("not-Display");
    Containers.classList.add("not-Display");
});
