// Charger les données depuis localStorage au démarrage de la page, dont la clé est BDD
// JSON.parse(...) convertit le json en javascript
let BDD = JSON.parse(localStorage.getItem('BDD')) || [["root", "superior"]];

let messages = JSON.parse(localStorage.getItem('messages')) || [["vaeelin", "This game is vey good !"]];
  
