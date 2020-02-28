/////////////////
// VARIABLES ////
/////////////////

document.getElementById("display-area").innerHTML = "00:00:00.000";

const bkgMusic = new Audio("assets/mp3/music.mp3")
const click = new Audio("assets/mp3/click.mp3")
const bleep = new Audio("assets/mp3/98.mp3")
const dawarn = new Audio("assets/mp3/dawarn.mp3")
const warn = new Audio("assets/mp3/warning.mp3")
const k1 = new Audio("assets/mp3/kbd1.mp3")
const k2 = new Audio("assets/mp3/kbd2.mp3")
const k3 = new Audio("assets/mp3/kbd3.mp3")
const k4 = new Audio("assets/mp3/kbd4.mp3")

$(".status").text("LISTENING")
$(".status").css("color", "green")

let i=0;
var score = 0
let timeBegan = null, 
    timeStopped = null,
    stoppedDuration = 0,
    started = null;
let seconds = 85;

const numbersArr = [1,2,3,4,5,6,7,8,9,10,11,12]
let warning = false;
let isCorrect = false;
let gameWin=false;
let popUp = 0

//////////////
/// CLOCK ////
//////////////
       
function clockRunning(){
    var currentTime = new Date()
        timeElapsed = new Date(currentTime - timeBegan - stoppedDuration),
        hour = timeElapsed.getUTCHours(),
        min = timeElapsed.getUTCMinutes(),
        sec = timeElapsed.getUTCSeconds(),
        ms = timeElapsed.getUTCMilliseconds();
    document.getElementById("display-area").innerHTML = 
    (hour > 9 ? hour : "0" + hour) + ":" + 
    (min > 9 ? min : "0" + min) + ":" + 
    (sec > 9 ? sec : "0" + sec) + "." + 
    (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
};

function start() {
    if (timeBegan === null) {
        timeBegan = new Date();
    }
    if (timeStopped !== null) {
        stoppedDuration += (new Date() - timeStopped);
    }
    started = setInterval(clockRunning, 10);	
}

//////////////
// PROGRESS //
//////////////

if (seconds == 0) {clearInterval(started);
    stoppedDuration == 0;
    timeBegan = null;
    timeStopped = null;
    document.getElementById("display-area").innerHTML = "00:01:20.000";}  
