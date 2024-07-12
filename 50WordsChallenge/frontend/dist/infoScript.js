"use strict";
var welcome = document.querySelector(".welcome");
var text = document.querySelector(".text");
var display = false;
welcome.addEventListener("click", function () {
    console.log("bonjour");
    if (!display) {
        text.style.height = "auto";
        welcome.style.height = "auto";
        display = true;
    }
    else {
        text.style.height = "70px";
        welcome.style.height = "200px";
        display = false;
    }
});
