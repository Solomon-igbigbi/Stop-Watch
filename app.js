let seconds = 0
let minutes = 0
let miliseconds = 0
let hours = 0;

let milisecondsTimer = 0;
let minutesTimer = 0;
let secondsTimer = 0;
let hoursTimer = 0;

let interval = null;
let timerStatus = "stopped";

function stopWatch() {
    miliseconds++;

    if(miliseconds / 100 === 1) {
        miliseconds = 0
        seconds++

        if(seconds / 60 === 1) {
            seconds = 0
            minutes++

            if(minutes / 60 === 1) {
                minutes = 0
                hours++
            }
        }
    }  

    if (miliseconds < 10) {
        milisecondsTimer = "0" + miliseconds.toString()
    }
    else {
        milisecondsTimer = miliseconds
    }
    
    if (seconds < 10) {
        secondsTimer = "0" + seconds.toString()
    }
    else {
        secondsTimer = seconds
    }
    
    if (minutes < 10) {
        minutesTimer = "0" + minutes.toString()
    }
    else {
        minutesTimer = minutes
    }
    
    if (hours < 10) {
        hoursTimer = "0" + hours.toString()
    }
    else {
        hoursTimer = hours
    }
    
    document.getElementById("timer").innerHTML = hoursTimer + ":" + minutesTimer + ":" + secondsTimer + "<p class='little_one'>:" + milisecondsTimer + "</p>";
}

// window.setInterval(stopWatch, 10)

function startButton() {
    if(timerStatus === "stopped") {
        interval =  window.setInterval(stopWatch, 10);
        document.getElementById("start").innerHTML = "STOP";
        timerStatus = "started";
        console.log(timerStatus)
    }
    else {
        window.clearInterval(interval);
        document.getElementById("start").innerHTML = "START";
        timerStatus = "stopped";
        console.log(timerStatus)
    }
}


function reset() {
    window.clearInterval(interval)
    seconds = 0
    minutes = 0
    miliseconds = 0
    hours = 0;
    timerStatus = "stopped"
    document.getElementById("timer").innerHTML = "00:00:00<p class='little  '>:00</p>"
    document.getElementById("start").innerHTML = "START";
}

window.addEventListener("keypress", startWatch);
window.addEventListener("keypress", resetWatch);

function startWatch(key) {
    if(key.keyCode == "32") {
        startButton()
    } 
}

function resetWatch(key){
    if(key.keyCode == "13") {
        reset()
    }
}

