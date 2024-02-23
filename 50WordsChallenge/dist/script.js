"use strict";
var choosingWords = [];
var consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
var vowel = ["a", "e", "i", "o", "u", "y"];
var numberVowel = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;
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
function initializeLetters(choosingWords) {
    // For choosing the vowels with random
    var occurVowel = [];
    while (occurVowel.length < numberVowel) {
        var choiceVowel = Math.floor(Math.random() * 6);
        if (occurVowel.indexOf(choiceVowel) === -1) {
            choosingWords.push(vowel[choiceVowel]);
            occurVowel.push(choiceVowel);
        }
    }
    // For choosing the consonants with random
    var occurConsonant = [];
    while (occurConsonant.length < 10 - numberVowel) {
        var choiceConsonant = Math.floor(Math.random() * 20);
        if (occurConsonant.indexOf(choiceConsonant) === -1) {
            choosingWords.push(consonant[choiceConsonant]);
            occurConsonant.push(choiceConsonant);
        }
    }
    choosingWords = shuffle(choosingWords);
    // adding this words in the divs with the letter${i} class
    var letters = [];
    for (var i = 1; i <= 10; i++) {
        letters.push(document.querySelector(".letter" + i));
    }
    // Utilisez une boucle forEach pour attribuer les valeurs de choosingWords aux éléments de lettre
    choosingWords.forEach(function (element, i) {
        letters[i].textContent = element.toUpperCase();
    });
}
initializeLetters(choosingWords);
// Initialize the change button
var newWord = document.querySelector(".new-word");
var verificationWord = "";
var change = document.querySelector(".change-letters");
change.addEventListener('click', function () {
    choosingWords = [];
    initializeLetters(choosingWords);
    var spans = newWord.querySelectorAll('span');
    // remove all the span in the div new-word
    spans.forEach(function (span) {
        span.remove();
    });
    var span = document.createElement("span");
    span.classList.add("cursor");
    newWord.appendChild(span);
    verificationWord = "";
    // remove the latest words in the website
    var secondWord = document.querySelector(".second-word");
    var thirdWord = document.querySelector(".third-word");
    var fourthWord = document.querySelector(".fourthWord");
    var fifthWord = document.querySelector(".fifth-word");
    secondWord.textContent = "";
    thirdWord.textContent = "";
    fourthWord.textContent = "";
    fifthWord.textContent = "";
});
// Initialize the new-word with the cursor
var letters = [];
for (var i = 1; i <= 10; i++) {
    letters.push(document.querySelector(".letter" + i));
}
letters.forEach(function (element) {
    element.addEventListener("click", function () {
        verificationWord += element.textContent;
        var spans = newWord.querySelectorAll('span');
        // remove all the span in the div new-word
        spans.forEach(function (span) {
            span.remove();
        });
        for (var i = 0; i < verificationWord.length; i++) {
            if (i + 1 < verificationWord.length) {
                var span = document.createElement("span");
                span.textContent = verificationWord[i];
                span.classList.add("current-span");
                newWord.appendChild(span);
            }
            else {
                var span = document.createElement("span");
                span.textContent = verificationWord[i];
                span.classList.add("cursor");
                newWord.appendChild(span);
            }
        }
    });
});
