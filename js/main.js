//  Link to HTML elements
const nextBut = document.querySelector('.nextBut');
const rstBut = document.querySelector('.rstBut');
const topText = document.querySelector('.topText');
const botText = document.querySelector('.botText');
//  Init variables
var state = 0;
//  Randomize symbol for x * 9s
var symbol = Math.floor(Math.random() * 9);

// Declare data object
const data = {
    bgTxt: ['Welcome to the MIND-READER',
        'Visualize a number from 01 to 99',
        'Add each of the the two digits of your number together',
        'Now subtract that sum from the original number',
        '(symbol scroll)',
        'Stare at the screen and visualize the symbol in your mind',
        '(show symbol)',
        'I hope you were sitting down!'],
    smlTxt: ['Prepare to be amazed!',
        'Once you see it press the next button',
        'If you chose 92, 9 + 2',
        '92 minus 11',
        'Scroll down and find the symbol for your new number',
        'Allow at least 5 seconds for accurate mind reading...',
        'Is this your symbol?',
        'Now pick your jaw up off the floor and try again!'],
    smbls: ['~', '!', '@', '#', '$', '%', '+', '&', '*'],

}
// ****  START PROGRAM *****
document.body.onload = mndRdr(0);

// Main Program
function mndRdr() {
    if (state == 8) {rstnow()}
    if (data.bgTxt[state] == "(symbol scroll)") {
        topText.innerHTML = makeSymbolString();
    } else if (data.bgTxt[state] == "(show symbol)") {
        topText.innerHTML = data.smbls[symbol];
    } else {
        topText.textContent = data.bgTxt[state];
    }
    botText.textContent = data.smlTxt[state];
    console.log(state);
    state++;
}

//  Create the string of number : symbol
function makeSymbolString() {
    var symbolString = "";
    var s = symbol;
    for (x = 0; x < 100; x++) {
        if (s == 9) { s = 0 };
        symbolString += x + " :  " + data.smbls[s] + "<br>";
        s++;

    }
    return symbolString;
}


//  Reset
function rstnow() {
    state = 0;
    symbol = Math.floor((Math.random() * 9) + 1);
    mndRdr();
    //nextBut.addEventListener('click', mndRdr);
    //mndRdr(0);
}

//  Button Listeners
nextBut.addEventListener('click', mndRdr);
rstBut.addEventListener('click', rstnow);









