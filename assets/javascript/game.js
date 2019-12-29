// Create var for wins/losses/chances/and guesses so far
var psychic = {
    wins: 0,
    losses: 0,
    chances: 10,
    guesses: [],
    computerLetter: [],
    letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
}

// computer picks random letter
function randLetter() {
    psychic.computerLetter = psychic.letters[Math.floor(Math.random() * psychic.letters.length)];
    return psychic.computerLetter;
}

function start() {
    document.getElementById("wins").innerText = 'Wins: ${psychic.wins}' ;
    document.getElementById("losses").innerText = 'Losses: ${psychic.losses}' ;
    document.getElementById("chancesLeft").innerText = 'Chances: ${psychic.chances}' ;
    document.getElementById("guessesMade").innerText = 'Guesses: ${psychic.guesses' ;
    
}

function gameWin() {
    psychic.wins++ ;
    psychic.chances = 10 ;
    document.getElementById("wins").innerText = 'Wins: ${psychic.wins}' ;
    document.getElementById("chancesLeft").innerText = 'Chances Left: ${psychic.chances}' ;
    document.getElementById("guessesMade").innerText = 'Your Guesses: ${psychic.guesses}' ;
}

function gameLose() {
    psychic.losses++ ;
    psychic.chances-- ;
    document.getElementById("losses").innerText = 'Losses: ${psychic.losses}' ;
    document.getElementById("chancesLeft").innerText = 'Chances Left: ${psychic.chances}' ;
    document.getElementById("guessesMade").innerText = 'Your Guesses: ${psychic.guesses}' ;
}

// computer selects random letter
computerGuess = randLetter()

document.onkeyup = function(event) {
    var userKey = event.key.toLowerCase();
    

// if user guesses correctly, add 1 to the wins variable and 1 to the guesses so far var

    if (computerGuess === userKey) {
        alert("Correct!")
        gameWin() ;
    }
    // if user guesses incorrectly, add 1 to the losses var and subtract 1 from the guesses left var.
    else {
        alert("Nope. Try Again.")
        gameLose() ;
    }
 

}