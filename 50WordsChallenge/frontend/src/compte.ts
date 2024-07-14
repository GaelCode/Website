const del = document.querySelector(".delete") as HTMLButtonElement

del.addEventListener("click", () => {
    const confirmation = confirm("Are you sure you want to delete your account ? This action cannot be undone.")

    if (confirmation){
        const form = document.getElementById("accountForm") as HTMLFormElement
        const input = document.createElement("input") as HTMLInputElement
        input.type = "hidden"
        input.name = "delete"
        input.value = "true"
        form.appendChild(input)
        form.submit()
    }
})
