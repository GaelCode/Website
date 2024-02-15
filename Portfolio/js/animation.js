let project = document.querySelectorAll(".project")

project.forEach((div) => {
    let paragraph = div.querySelector("p");

    div.addEventListener('mouseover', () => {
        paragraph.style.visibility = "visible"
    })

    div.addEventListener('mouseout', () => {
        paragraph.style.visibility = "hidden"
    })
})


gsap.registerPlugin(ScrollTrigger);
// gsap.defaults({ease: "none", duration: 2})

// gsap.to(".apparition", {
    
//     scrollTrigger: {
//         toggleActions: "restart pause resume none",
//         start: "top top",
//         end: '+=100',
//         trigger: ".site" /* when the element is visible */
//     },
//     opacity: 0,
//     x: 100,
//     duration: 1
// })

setTimeout(() => {

        gsap.from(".somary", {
            x: "-50px",
            opacity: 0,
            duration: 2,
        });
    gsap.from(".some-information-about-me", {x: "-50px", opacity: 0, duration: 2})
}, sommeTime + 500);



