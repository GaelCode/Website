let welcome = document.querySelector(".welcome") as HTMLBodyElement
let text = document.querySelector(".text") as HTMLParagraphElement

let display = false

welcome.addEventListener("click", () => {
    console.log("bonjour")

    if (!display){
        text.style.height = "auto"
        welcome.style.height = "auto"  
        display = true      
    }else{
        text.style.height = "70px"
        welcome.style.height = "200px"  
        display = false
    }
})
