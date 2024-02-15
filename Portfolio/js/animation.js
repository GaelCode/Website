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