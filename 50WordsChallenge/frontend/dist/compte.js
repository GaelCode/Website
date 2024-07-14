"use strict";
var del = document.querySelector(".delete");
del.addEventListener("click", function () {
    var confirmation = confirm("Are you sure you want to delete your account ? This action cannot be undone.");
    if (confirmation) {
        var form = document.getElementById("accountForm");
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = "delete";
        input.value = "true";
        form.appendChild(input);
        form.submit();
    }
});
