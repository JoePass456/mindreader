// Start Program in state 0
//const topText = document.getElementById("topText").innerHTML;
//const botText = document.getElementById("botText").innerHTML;
const nextBut = document.querySelector('.nextBut');
const rstBut = document.querySelector('.rstBut');
const topText = document.querySelector('.topText');
const botText = document.querySelector('.botText');
var state = 0;
var symbol = Math.floor(Math.random() * 9);

//mndRdr object declared
const data = {
    bgTxt: ['Welcome to the MIND-READER',
        'Visualize a number from 01 to 99',
        'Add each of the the two digits of your number together',
        'Now subtract that sum from the original number',
        '(symbol scroll)',
        'Look at the blank screen and visualize the symbol',
        '(show symbol)',
        'I hope you were sitting down!'],
    smlTxt: ['Prepare to be amazed!',
        'Once you see it press the button',
        'If you chose 92, 9 + 2',
        '92 minus 11',
        'Scroll down and find the symbol for your new number',
        'Allow at least 5 seconds for accurate mind reading...',
        'Is this your symbol?',
        'Now pick your jaw up off the floor and try again!'],
    smbls: ['~', '!', '@', '#', '$', '%', '+', '&', '*'],

}
document.body.onload = mndRdr(0);

function mndRdr() {
    //console.log(state, data.bgTxt[state]);
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



function rstnow() {
    state = 0;
    symbol = Math.floor((Math.random() * 9) + 1);
    mndRdr();
    //nextBut.addEventListener('click', mndRdr);
    //mndRdr(0);
}
nextBut.addEventListener('click', mndRdr);
rstBut.addEventListener('click', rstnow);









