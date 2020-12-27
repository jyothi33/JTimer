
const rButton = document.querySelector(".reset");
const sButton = document.querySelector(".start");
const counterValue = document.getElementById("timer");
const bell = document.getElementById("bell");

let counter = 0;

//convert minutes to seconds. This is required as we are also showing seconds and that needs to be calculated.
let timeleft;

let timerId = 0;
//Executes on click of start countdown button
sButton.addEventListener('click',function () {
    //Take the time in minutes format from user.
    let userInput = prompt("Please provide the timer ?");
    //As this will be string , convert it to integer.
    let timeInput = parseInt(userInput);
    timeleft = timeInput*60;
    //getTimer fnction is invoked every second. 1000ms = 1 second
    timerId = setInterval(getTimer, 1000);
});

//Function takes in user input in seconds and returns it in min:sec format.
function convertToMinutesSecond(timeleft){
    let min = Math.floor(timeleft/60);
    let sec = (timeleft%60) ;
    if(sec < 10){
        sec = "0"+sec;
    }
    return "0"+min + ":" + sec; 
}

//Gets invoked every second and which updates the timer on screen with the newly calculated timer value.
function getTimer() {
    counter++;
    counterValue.textContent = convertToMinutesSecond(timeleft - counter);
    if(timeleft - counter === 0){
        clearTimer(); 
        bell.play(); 
    }
}

//Executes when reset button is clicked.
rButton.addEventListener('click',function () {
    clearTimer();
});

function clearTimer() {
    //Clearing the setInterval when reset button is clicked.
    if(timerId){
        clearInterval(timerId);
    }
    //update the timer value to 00:00
    counterValue.textContent = "00:00";  
}