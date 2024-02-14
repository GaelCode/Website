// Récupération des éléments du DOM
let ecritureMessage = document.getElementById("ecritureMessage");
let affichagePseudo = document.getElementById("affichagePseudo");
let message = document.getElementById("AllMessage");

// Boucle pour afficher les messages existants lors du chargement de la page
for (let i = 0; i < messages.length; i++) {
    let div = document.createElement("div");
    let messagep = document.createElement("div");
    let pseudoMessage = document.createElement("div");
    messagep.innerText = messages[i][1];
    pseudoMessage.innerHTML = `<img src="./profil_inconnu.jpg" alt="Profil inconnu"> <span>${messages[i][0]}</span>`;
    messagep.classList.add("messageNvTexte");
    pseudoMessage.classList.add("messageNvPseudo");
    div.classList.add("messageNv");
    div.appendChild(pseudoMessage);
    div.appendChild(messagep);
    message.appendChild(div);
}

// Écouteur d'événement pour l'envoi de messages lors de l'appui sur la touche "Enter"
ecritureMessage.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        // Récupération des valeurs du pseudo et du message
        let messageValue = ecritureMessage.value;

        // Ajout du nouveau message dans le tableau et mise à jour de l'affichage
        messages.push([pseudoValue, messageValue]);
        let div = document.createElement("div");
        let messagep = document.createElement("div");
        let pseudoMessage = document.createElement("div");
        messagep.innerText = messageValue;
        pseudoMessage.innerHTML = `<img src="./profil_inconnu.jpg" alt="Profil inconnu"> <span>${pseudoValue}</span>`;
        messagep.classList.add("messageNvTexte");
        pseudoMessage.classList.add("messageNvPseudo");
        div.classList.add("messageNv");
        div.appendChild(pseudoMessage);
        div.appendChild(messagep);
        message.appendChild(div);

        // Sauvegarde des messages dans le localStorage
        localStorage.setItem('messages', JSON.stringify(messages));

        // Réinitialisation du champ de saisie
        ecritureMessage.value = "";
    }
});
