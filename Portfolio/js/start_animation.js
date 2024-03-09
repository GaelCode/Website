let textHome = document.querySelector(".text-home");
let letters = document.querySelectorAll(".letter");
let introduction = document.querySelector(".introduction");
let cursor = document.querySelector(".cursor");

let site = document.querySelector(".site");

let sommeTime = 0;

const timeline = gsap.timeline();
const positions = [
    "2.5vw", "4.7vw", "6.9vw", "8.8vw", "10.8vw", "13vw", "15vw", "17vw", "19vw", "21.2vw",
"23.2vw", "25.2vw", "27.2vw", "29.2vw", "31.7vw", "33.7vw", "36.2vw", "38.4vw", "40.5vw", "42.4vw"
, "44.8vw", "47vw", "49vw", "51vw","53.0vw"





];


positions.forEach((position) => {
    let random = Math.random() * 3;
    sommeTime += random * 0.1 * 1000;
    timeline.to(".cursor", { x: position, duration: 0, delay:random * 0.1}); 
});


setTimeout(() => {
    introduction.style.display = "none";
}, sommeTime + 700);

