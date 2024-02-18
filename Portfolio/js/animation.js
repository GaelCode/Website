let project = document.querySelectorAll(".project")


project.forEach((div) => {
    let paragraph = div.querySelector("p");
    let h3 = div.querySelector("h3")

    div.addEventListener('mouseover', () => {
        paragraph.style.visibility = "visible"
        h3.style.color = "rgb(69, 246, 252)"
    })

    div.addEventListener('mouseout', () => {
        paragraph.style.visibility = "hidden"
        h3.style.color = "white"
    })
})

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

    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".second-apparition, .ligne1, .ligne2",{
        scrollTrigger: {
            trigger: ".ligne2",
            start: "top 60%"
        },
        x: "-200px", 
        opacity: 0.1,
        duration: 3
    })
    gsap.from(".my-Project",{
        scrollTrigger: {
            trigger: ".my-Project",
            start: "top 60%"
        },
        x: "-200px",  
        opacity: 0.3,
        duration: 3
    })

}, sommeTime + 500);




