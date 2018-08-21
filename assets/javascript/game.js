//VARIABLES
//---------------------------------------
// How many times a letter can be pressed
var doubleWord = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
				  'y','z'];
//Word Bank
var wordBank =['aviators','thrift','kale', 'vintage', 'ironic'];
//Holds currentWord
var currentWord = "";
//Holds letters in word
var lettersInWord = [];
//Holds number of dashes for word
var numDashes = 0;
//Holds Blanks and successful guesses
var blanksAndSuccesses =[];
//Holds Wrong guesses
var wrongLetters = [];
//Counters
var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;
//FUNCTIONS
//----------------------------------------
function reset()
{
	//Chooses random word from wordBank
	currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	//Splits chosen word into individual letters
	lettersInWord = currentWord.split('');
	//Get the number of dashes for current word
	numDashes = lettersInWord.length;
	
	//RESET
	//===========================================================
	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	blanksAndSuccesses =[];
	doubleWord = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];
	test=false;
	startGame();
}
function startGame()
{
	//Chooses random word from the wordBank
	currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	//Splits chosen word into individual letters
	lettersInWord = currentWord.split('');
	//Get the number of dashes
	numDashes = lettersInWord.length;
	
	//RESET GAME
	//===========================================================
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	blanksAndSuccesses =[];
	doubleWord = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];

	//Generate dashes
	for(var i = 0; i< numDashes; i++)
	{
		blanksAndSuccesses.push('_');
		document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
	}

	//Changes HTML 
	document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
	document.getElementById('numGuesses').innerHTML = guessesLeft;
	document.getElementById('winCounter').innerHTML = winCount;
	document.getElementById('lossCounter').innerHTML = loseCount;
	document.getElementById('wrongGuesses').innerHTML = wrongLetters;
	// Testing
	console.log(currentWord);
	console.log(lettersInWord);
	console.log(numDashes);
	console.log(blanksAndSuccesses);
}

function compareLetters(userKey)
{
				console.log('WORKING!');
				//If user guesses correct letter perform this function 
				if(currentWord.indexOf(userKey) > -1)
				{
					//Loops depending on number of dashes 
					for(var i = 0; i < numDashes; i++)
					{
						//Fills in right index with user guess
						if(lettersInWord[i] === userKey)
						{
							rightGuessCounter++;
							blanksAndSuccesses[i] = userKey;
							document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
						}	
					}
					//Testing
					console.log(blanksAndSuccesses);
				}
			//Wrong Keys
            else
            {
                wrongLetters.push(userKey);
                guessesLeft--;
                //Changes HTML on page
                document.getElementById('numGuesses').innerHTML = guessesLeft;
                document.getElementById('wrongGuesses').innerHTML = wrongLetters;
                //Testing
                console.log('Wrong Letters = ' + wrongLetters);
                console.log('Guesses left are ' + guessesLeft);
            }
			
			
		
}
function winLose()
{
	// When number dashes if filled with right words then you win
	if(rightGuessCounter === numDashes)
	{
		//Counts Wins 
		winCount++;
		//Changes HTML on page
		document.getElementById('winCounter').innerHTML = winCount;
		alert('I Guess You Won');
		reset();
	}
	// When number of Guesses reaches 0 then You lose
	else if(guessesLeft === 0)
	{
		//Counts losses
		loseCount++;
		//Changes HTML
		document.getElementById('lossCounter').innerHTML = loseCount;
		alert('Not this time');
		reset();
	}
}

//MAIN PROCCESS
//-------------------------------------------	
//Start code
startGame();

document.onkeyup = function(event)
{
	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < doubleWord.length; i++)
	{	
		if(letterGuessed === doubleWord[i] && test === true)
		{
			var spliceDword = doubleWord.splice(i,1);
			//Testing
			console.log('Double word is = ' + doubleWord[i])
			console.log('Spliced Word is = ' + spliceDword);

			compareLetters(letterGuessed);
			winLose();
		}
    }	
}
		