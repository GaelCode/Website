"use strict";
var myProject = document.querySelector(".my-Project");
var projects = [
    { nom: "Calculator", sourceImage: "./assets/projet-calculatrice.png", sourceGitHub: "https://github.com/GaelCode/Website/tree/master/Calculatrice", description: "Creation of an online calculator" },
    { nom: "Stopwatch", sourceImage: "./assets/projet-chronometre.png", sourceGitHub: "https://github.com/GaelCode/Website/tree/master/chronometre", description: "Creation of an online stopwatch" },
    { nom: "Forum", sourceImage: "./assets/projet-forum.png", sourceGitHub: "https://github.com/GaelCode/Website/tree/master/forum_elden_ring", description: "Creation of a forum about the game Elden Ring" },
    { nom: "Portfolio", sourceImage: "./assets/projet-portfolio.png", sourceGitHub: "https://github.com/GaelCode/Website/tree/master/Portfolio", description: "Creation of my portfolio" },
    { nom: "QuickType", sourceImage: "./assets/projet-quicktype.png", sourceGitHub: "https://github.com/GaelCode/Website/tree/master/QuickType", description: "Creation of a website to practice typing" },
    { nom: "To-do list", sourceImage: "./assets/projet-to-do-list.png", sourceGitHub: "https://github.com/GaelCode/Website/tree/master/to-do-list", description: "Creation of a To-Do list" }
];
for (var _i = 0, projects_1 = projects; _i < projects_1.length; _i++) {
    var elt = projects_1[_i];
    var newProject = document.createElement("div");
    newProject.innerHTML = "\n        <a href=".concat(elt.sourceGitHub, " target=\"_blank\">\n            <h3>").concat(elt.nom, "</h3> \n        </a>\n        <p style=\"visibility: hidden\">").concat(elt.description, "</p>\n    ");
    newProject.style.background = "url(".concat(elt.sourceImage, ") no-repeat center");
    newProject.classList.add("project");
    newProject.classList.add("apparition");
    myProject.appendChild(newProject);
}
