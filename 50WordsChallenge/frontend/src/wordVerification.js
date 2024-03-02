// recovery word with fetch()
let data;

async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/word');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        data = await response.json();
    } catch (error) {
        console.error('Problem with data retrieval:', error);
    }
}

fetchData();


// verification if the word is in the dictionnary

function wordVerification(word){
    if (data[word[0]][word]){
        return true;
    }
    return false;
}