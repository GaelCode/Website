let textHome = document.querySelector(".text-home");
let letters = document.querySelectorAll(".letter");
let introduction = document.querySelector(".introduction");
let cursor = document.querySelector(".cursor");

let sommeTime = 0;

const timeline = gsap.timeline();
const positions = [
    "2.4vh", "3.4vh", "4.1vh", "5vh", "6.1vh", "7.8vh", "8.8vh", "9.3vh", "10.2vh", 
    "11.4vh", "11.9vh", "13.6vh", "14.7vh", "15.2vh", "16.4vh", "17.6vh", "18.4vh", "19vh", 
    "19.9vh", "20.8vh", "21.5vh", "22.2vh", "23.4vh", "24vh","24.7vh"
];


positions.forEach((position) => {
    let random = Math.random() * 3;
    sommeTime += random * 0.1 * 1000;
    timeline.to(".cursor", { x: position, duration: 0, delay: random * 0.1});
});


setTimeout(() => {
    introduction.style.display = "none";
}, sommeTime + 500);

