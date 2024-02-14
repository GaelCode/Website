let conf = document.getElementById("conf");
let conf2 = document.getElementById("conf2");
let forgotPassword = document.querySelector("#seConnecter p");
let seConnecter = document.getElementById("seConnecter");
let creerUnCompte = document.getElementById("creerUnCompte");
let containers = document.querySelector(".containers");
let connexion = document.querySelector(".connexion");
let nomCompte;

// si le boutton pour se connecter est appuyer
conf.addEventListener('click', () =>{
    // récupération du nom et du mot de passe
    let nom = document.getElementById('nom');
    let mdp = document.getElementById('motDePasse');

    // vérification si le compte existe
    for (let i = 0; i < compte.length; i++)
    {
        if (nom.value == compte[i][0] && mdp.value == compte[i][1])
        {
            let pseudo = document.querySelector(".pseudo");
            pseudo.innerText = nom.value;
            nomCompte = nom.value;
            connexion.classList.add("not-Display");
            containers.classList.remove("not-Display");

            afficherToDo("Personnel");
            break;
        }
    }
});

// si le boutton pour créer un compte est appuyer
conf2.addEventListener('click', () =>{
    let nom2 = document.getElementById('nom2');
    let mdp2 = document.getElementById('motDePasse2');
    let verif = document.getElementById('verifMotDePasse');
    let erreur = document.querySelector(".erreur");
    let mistake = false;
    
    // vérification si les deux mots de passe sont différents
    if (mdp2.value != verif.value)
    {
        erreur.classList.remove('not-Display');
        mistake = true;
    }
    
    // si le nom n'est pas déjà pris
    for (let i = 0; i < compte.length; i++)
    {
        if (nom2.value == compte[i][0])
        {
            // si l'affichage d'erreur est déjà mis ou non
            if (!mistake)
            {
                mistake = true;
                erreur.classList.remove('not-Display');
            }
            break;
        }
    }

    // création du compte et ouverture vers la page
    if (!mistake)
    {
        let pseudo = document.querySelector(".pseudo");
        pseudo.innerText = nom2.value;
        nomCompte = nom2.value;

        // enregistrement du compte
        compte.push([nom2.value, mdp2.value]);
        localStorage.setItem('compte', JSON.stringify(compte));

        connexion.classList.add("not-Display");
        containers.classList.remove("not-Display");

        afficherToDo("Personnel");
    }
});

// Si la personne n'a pas de compte
forgotPassword.addEventListener('click', () =>{
    seConnecter.classList.add("not-Display");
    creerUnCompte.classList.remove("not-Display");
})

// réaffichage du compte si la page est reload
window.addEventListener('beforeunload', () => {
    connexion.classList.remove("not-Display");
    containers.classList.add("not-Display");
})