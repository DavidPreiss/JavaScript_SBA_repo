let d = new Date("June 6, 1996 4:30:01");
console.log(d.getHours());

let count = 0;
function countUp(){
    count++;
    document.getElementById("counter-display").innerHTML = count;
}
function countDown(){
    count--;
    document.getElementById("counter-display").innerHTML = count;
}
function squareUserNumber(){
    let dispval = document.getElementById("userInput").value;
    if (Number.isInteger(dispval*dispval))dispval = dispval*dispval;
    document.getElementById("square-display").innerHTML = dispval;
}

let canWAMrun = true;
let secondsWAM = 10;
let secondspassed = 0;
let cscore = 0;
let hscore = 0;
function wackamole()
{
    if (canWAMrun)
    {
        canWAMrun = false
        document.getElementById("temp").innerHTML = secondsWAM;
        setTimeout(resetWack,1000);
        cscore=0;
        updateScore();
    }
}

function updateScore()
{
    document.getElementById("cscore").innerHTML = "Score: "+ cscore;

    if (cscore > hscore)
    {
        hscore = cscore;
        document.getElementById("hscore").innerHTML = "High Score: "+ hscore;
    }
}

function resetWack()
{
    
    secondspassed++;
    let tempdisp = secondsWAM-secondspassed
    document.getElementById("temp").innerHTML = tempdisp;
    if (tempdisp > 0) setTimeout(resetWack,1000);
    else 
    {
    canWAMrun = true;
    secondspassed = 0;}

}

let holesArray = [true,false,false];
let buttonsArray = ["button0","button1","button2"];

function fillRandomHole()
{
    let temp = Math.floor(Math.random()*holesArray.length)
    holesArray[temp] = true;
    document.getElementById(buttonsArray[temp]).innerHTML = "O";

}

function button(userInput)
{
    
    if (holesArray[userInput])
    {

        document.getElementById(buttonsArray[userInput]).innerHTML = "X";
        holesArray[userInput] = false;
        if(!canWAMrun)
        {
            cscore++;
            updateScore();
        }
        fillRandomHole()
    }
}



function guessingGame(){

let input = prompt("Enter a range (in the form 23 34):");
let range = input.split(" ");
let guess = (Math.floor
    (
        Math.random() * 
        (Number(range[1]) - Number(range[0])) + Number(range[0])
    )
    )
let stopper = 0;
let userGuess = prompt
(`Guess a number between ${range[0]} and ${range[1]}`)
while(stopper <= 10)
{
    if(guess == userGuess)
    {
        alert("You got it: " + userGuess);
        break;
    }
    userGuess = prompt(`Keep guessing a number between ${range[0]} and ${range[1]}`)

}
if(guess != userGuess)
{
    alert("sorry, the anwser was " + guess);
}
}
    
