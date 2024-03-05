let choosingLetters: string[] = [];
let consonant: string[] = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
let vowel: string[] = ["a", "e", "i", "o", "u", "y"];
let numberVowel: number = Math.floor(Math.random() * (5 - 3 + 1)) + 3;

function shuffle(array: string[]): string[] {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // while there is something to shake
    while (0 !== currentIndex) {

        // To choose a remaining element 
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // Change the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


function initializeLetters(choosingLetters: string[]){
    // For choosing the vowels with random
    let occurVowel: number[] = [];

    while (occurVowel.length < numberVowel) {
        let choiceVowel: number = Math.floor(Math.random() * 6);
        if (occurVowel.indexOf(choiceVowel) === -1) {
            choosingLetters.push(vowel[choiceVowel]);
            occurVowel.push(choiceVowel);
        }
    }

    // For choosing the consonants with random
    let occurConsonant: number[] = [];

    while (occurConsonant.length < 10 - numberVowel) {
        let choiceConsonant: number = Math.floor(Math.random() * 20);
        if (occurConsonant.indexOf(choiceConsonant) === -1) {
            choosingLetters.push(consonant[choiceConsonant]);
            occurConsonant.push(choiceConsonant);
        }
        
    }


    choosingLetters = shuffle(choosingLetters)
    // adding this words in the divs with the letter${i} class

    let letters: HTMLDivElement[] = [];
    for (let i:number = 1; i <= 10; i++) {
        letters.push(document.querySelector(".letter" + i) as HTMLDivElement);
    }

    choosingLetters.forEach((element, i) => {
        letters[i].textContent = element.toUpperCase();
    });
}

initializeLetters(choosingLetters)


// Initialize the change button
let newWord = document.querySelector(".new-word") as HTMLDivElement
let verificationWord: string = "";


let secondWord = document.querySelector(".second-word") as HTMLDivElement
let thirdWord = document.querySelector(".third-word") as HTMLDivElement
let fourthWord = document.querySelector(".fourth-word") as HTMLDivElement
let fifthWord = document.querySelector(".fifth-word") as HTMLDivElement

let change = document.querySelector(".change-letters") as HTMLButtonElement
change.addEventListener('click', () => {
    choosingLetters = []
    choosingWords = []
    initializeLetters(choosingLetters)

    const spans = newWord.querySelectorAll('span');

    // remove all the span in the div new-word
    spans.forEach(span => {
        span.remove();
    });
    
    let span = document.createElement("span")
    span.classList.add("cursor")
    newWord.appendChild(span)


    verificationWord = ""

    // remove the latest words in the website
    secondWord.textContent = ""
    thirdWord.textContent = ""
    fourthWord.textContent = ""
    fifthWord.textContent = ""

    
})


// Initialize the new-word with the cursor

let letters: HTMLDivElement[] = [];
for (let i:number = 1; i <= 10; i++) {
    letters.push(document.querySelector(".letter" + i) as HTMLDivElement);
}

letters.forEach(element => {
    element.addEventListener("click", () =>{
        verificationWord += element.textContent

        const spans = newWord.querySelectorAll('span') as NodeListOf<HTMLSpanElement>

        // remove all the span in the div new-word
        spans.forEach(span => {
            span.remove();
        });

        for (let i :number = 0; i < verificationWord.length; i++){
            if (i + 1 < verificationWord.length){
                let span = document.createElement("span") as HTMLSpanElement
                span.textContent = verificationWord[i]
                span.classList.add("current-span")
                newWord.appendChild(span)
            }else{
                let span = document.createElement("span") as HTMLSpanElement
                span.textContent = verificationWord[i]
                span.classList.add("cursor")
                newWord.appendChild(span)
            }
            
        }
    })
})



// Modification when the button confirm is clicked


let Confirm = document.querySelector(".confirm") as HTMLButtonElement
let choosingWords : String[] = []

Confirm.addEventListener('click', () => {
    if (wordVerification(verificationWord.toLowerCase()) && choosingWords.indexOf(verificationWord) === -1){

        choosingWords.unshift(verificationWord)
        console.log(choosingWords)
        // remove all the span in the div new-word
        const spans = newWord.querySelectorAll('span');
        spans.forEach(span => {
            span.remove();
        });

        let span = document.createElement("span")
        span.classList.add("cursor")
        newWord.appendChild(span)
        
        for (let i = 0; i < choosingWords.length; i++) {
            const wordDiv = [secondWord, thirdWord, fourthWord, fifthWord][i];
            if (choosingWords[i]) {
                wordDiv.textContent = choosingWords[i].toString();
            }
        }



        verificationWord = ""
        
    }
})