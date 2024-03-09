let textHome = document.querySelector(".text-home");
let letters = document.querySelectorAll(".letter");
let introduction = document.querySelector(".introduction");
let cursor = document.querySelector(".cursor");

let site = document.querySelector(".site");

let sommeTime = 0;

const timeline = gsap.timeline();
const positions = [
    "2.5vw", "4.7vw", "6.9vw", "8.8vw", "10.8vw", "13vw", "15vw", "17vw", "19.4vw", "21.6vw",
"23.4vw", "25.4vw", "27.6vw", "29.8vw", "31.9vw", "33.9vw", "36vw", "38.2vw", "40.3vw", "42.2vw"
, "44.6vw", "46.6vw", "48.5vw", "51vw","53.0vw"
];


positions.forEach((position) => {
    let random = Math.random() * 3;
    sommeTime += random * 0.1 * 1000;
    timeline.to(".cursor", { x: position, duration: 0, delay:random * 0.1}); 
});


setTimeout(() => {
    introduction.style.display = "none";
}, sommeTime + 700);

