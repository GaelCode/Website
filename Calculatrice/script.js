let barreCalcul = document.getElementById("barreCalcul");
let bouttons = document.querySelectorAll("button");

let expression = "";
let TrueExpression = "";
let solution;

for (let i = 0; i < bouttons.length; i++) {
    bouttons[i].addEventListener('click', (event) => {
        if (event.target.value === "DEL") {
            TrueExpression = TrueExpression.substring(0, TrueExpression.length - 1);
            expression = TrueExpression;
            barreCalcul.innerText = expression;
        } else if (event.target.value === "AC") {
            TrueExpression = "";
            expression = "";
            barreCalcul.innerText = expression;
        } else if (event.target.value === "=") {
            try {
                solution = eval(TrueExpression);
                barreCalcul.innerText = solution;
            } catch (error) {
                barreCalcul.innerText = "Erreur";
            }
        } else if (event.target.value === "x") {
            TrueExpression += "*";
            expression += "x";
            barreCalcul.innerText = expression;
        } else if (event.target.value === "²") {
            TrueExpression += "**2";
            expression += "²";
            barreCalcul.innerText = expression;
        } else if (event.target.value === "(") {
            TrueExpression += "(";
            expression += "(";
            barreCalcul.innerText = expression;
        } else if (event.target.value === ")") {
            TrueExpression += ")";
            expression += ")";
            barreCalcul.innerText = expression;
        } else {
            TrueExpression += event.target.value;
            expression += event.target.value;
            barreCalcul.innerText = expression;
        }
    });
}
