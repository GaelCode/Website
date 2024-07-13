"use strict";
var choosingLetters = [];
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
function initializeLetters(choosingLetters) {
    // For choosing the vowels with random
    var occurVowel = [];
    while (occurVowel.length < numberVowel) {
        var choiceVowel = Math.floor(Math.random() * 6);
        if (occurVowel.indexOf(choiceVowel) === -1) {
            choosingLetters.push(vowel[choiceVowel]);
            occurVowel.push(choiceVowel);
        }
    }
    // For choosing the consonants with random
    var occurConsonant = [];
    while (occurConsonant.length < 12 - numberVowel) {
        var choiceConsonant = Math.floor(Math.random() * 20);
        if (occurConsonant.indexOf(choiceConsonant) === -1) {
            choosingLetters.push(consonant[choiceConsonant]);
            occurConsonant.push(choiceConsonant);
        }
    }
    choosingLetters = shuffle(choosingLetters);
    // adding this words in the divs with the letter${i} class
    var letters = [];
    for (var i = 1; i <= 12; i++) {
        letters.push(document.querySelector(".letter" + i));
    }
    choosingLetters.forEach(function (element, i) {
        letters[i].textContent = element.toUpperCase();
    });
}
initializeLetters(choosingLetters);
// Initialize the change button
var newWord = document.querySelector(".new-word");
var verificationWord = "";
var secondWord = document.querySelector(".second-word");
var thirdWord = document.querySelector(".third-word");
var fourthWord = document.querySelector(".fourth-word");
var fifthWord = document.querySelector(".fifth-word");
var change = document.querySelector(".change-letters");
change.addEventListener('click', function () {
    reset();
});
var reset = function () {
    choosingLetters = [];
    choosingWords = [];
    initializeLetters(choosingLetters);
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
    secondWord.textContent = "";
    thirdWord.textContent = "";
    fourthWord.textContent = "";
    fifthWord.textContent = "";
    timer.innerText = "3:00";
    startChronoVerification = false;
    time = 3 * 60;
};
// Initialize the new-word with the cursor
var letters = [];
for (var i = 1; i <= 12; i++) {
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
// Modification when the button confirm is clicked
var Confirm = document.querySelector(".confirm");
var choosingWords = [];
Confirm.addEventListener('click', function () {
    if (wordVerification(verificationWord.toLowerCase()) && choosingWords.indexOf(verificationWord) === -1) {
        choosingWords.unshift(verificationWord);
        console.log(choosingWords);
        // remove all the span in the div new-word
        var spans = newWord.querySelectorAll('span');
        spans.forEach(function (span) {
            span.remove();
        });
        var span = document.createElement("span");
        span.classList.add("cursor");
        newWord.appendChild(span);
        for (var i = 0; i < 4; i++) {
            var wordDiv = [secondWord, thirdWord, fourthWord, fifthWord][i];
            if (choosingWords[i]) {
                wordDiv.textContent = choosingWords[i].toString();
            }
        }
        verificationWord = "";
    }
});
// modification when the button delete is pressed
var deleteButton = document.querySelector(".delete");
deleteButton.addEventListener('click', function () {
    verificationWord = verificationWord.substring(0, verificationWord.length - 1);
    // remove all the span in the div new-word
    var spans = newWord.querySelectorAll('span');
    spans.forEach(function (span) {
        span.remove();
    });
    if (verificationWord.length === 0) {
        var span = document.createElement("span");
        span.classList.add("cursor");
        newWord.appendChild(span);
        return;
    }
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
var startChronoVerification = false;
var time = 3 * 60;
var allLetters = document.querySelectorAll(".let");
var timer = document.querySelector(".timer");
allLetters.forEach(function (letter) {
    letter.addEventListener("click", function () {
        if (!startChronoVerification) {
            startChronoVerification = true;
            timer.innerText = "3:00";
        }
    });
});
setInterval(function () {
    if (startChronoVerification && time > 0) {
        time -= 1;
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;
        timer.innerText = "".concat(minutes, ":").concat(seconds < 10 ? '0' : '').concat(seconds);
    }
    else {
        if (time === 0) {
            reset();
        }
    }
}, 1000);
