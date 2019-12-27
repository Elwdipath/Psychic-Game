// Create var for wins/losses/chances/and guesses so far
    var wins = 0;
    var losses = 0;
    var chances = 10;
    var guesses = 0; 
    var letter;

// computer picks random letter
function randLetter() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}

// program logs user keystroke and compares to random letter computer picked

document.onkeyup = function(event) {
    var userKey = event.key.toLowerCase();

}
// if user guesses correctly, add 1 to the wins variable and 1 to the guesses so far var

// if user guesses incorrectly, add 1 to the losses var and subtract 1 from the guesses left var. 