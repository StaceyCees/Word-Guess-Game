//Create an Array of Words

const phrase = ['Aviators', 'Kale'];

//Choose Word Randomly

let randNum = Math.floor(Math.random() * phrase.length);
let chosenPhrase = phrase[randNum];
let underScore = [];
console.log(chosenPhrase);



//Create underscore based on length of word

let generateUnderscore = () => {
    for(let i = 0; i < chosenPhrase.length; i++) {
    underScore.push('_');
    }
    return underScore;
}

console.log(generateUnderscore());

//Get users guess

document.addEventListener ('keypress', (event) => {
console.log(event);
});

//Check if guess is correct

//If guess is correct push to the right array

//If wrong push to wrong array

