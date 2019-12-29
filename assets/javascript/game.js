// Create var for wins/losses/chances/and guesses so far
var psychic = {
    wins: 0,
    losses: 0,
    chances: 10,
    guesses: [],
    computerLetter: "",
    letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
}

// random letter function
function randLetter() {
    psychic.computerLetter = psychic.letters[Math.floor(Math.random() * psychic.letters.length)];
}
// game start
function start() {
    psychic.chances = 10 ;
    psychic.guesses = [] ;
    document.getElementById("wins").innerText = `Wins: ${psychic.wins}` ;
    document.getElementById("losses").innerText = `Losses: ${psychic.losses}` ;
    document.getElementById("chancesLeft").innerText = `Chances: ${psychic.chances}` ;
    document.getElementById("guessesMade").innerText = `Your Guesses: ${psychic.guesses.join(" ").toUpperCase()}` ;
    randLetter();
    
}
// game win function
function gameWin() {
    psychic.wins++ ;
    start()
}
// game lose function
function gameLose() {
    psychic.chances-- ;
    if (psychic.chances < 1){
        alert("Game Over")
        psychic.losses++
        start()
        return
    }
    document.getElementById("chancesLeft").innerText = `Chances Left: ${psychic.chances}`;
    document.getElementById("guessesMade").innerText = `Your Guesses: ${psychic.guesses.join(" ")}` ;
    
}

// computer selects random letter by calling randLetter function

start()

document.onkeyup = function(event) {
    var userKey = event.key.toLowerCase();

// check if character input is a letter and alert if it is invalid.

    if (event.keyCode >= 65 && event.keyCode <= 90) {
       //validate user hasn't already guessed that key. 
        if (psychic.guesses.includes(userKey)) {
        alert("Already guessed");
        return; 
       }
        psychic.guesses.push(userKey);
    }
    
    else {
        alert("Invalid character")
        return; 
    }
    
// if user guesses correctly, add 1 to the wins variable and 1 to the guesses so far var

    if (psychic.computerLetter === userKey) {
        alert("Correct!")
        gameWin() ;
    }
    // if user guesses incorrectly, add 1 to the losses var and subtract 1 from the guesses left var.
    else {
        alert("Nope. Try Again.")
        gameLose() ;

    }
 
    

}