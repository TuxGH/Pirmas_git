var hours = 00;
var minutes = 00;
var seconds = 00; 
var tens = 00;
var appendTens = document.getElementById("tens")
var appendSeconds = document.getElementById("seconds")
var appendMinutes = document.getElementById("minutes")
var appendHours = document.getElementById("hours")
var myInterval

function startTimer(){
  clearInterval(myInterval);
myInterval = setInterval (updateTimer,  10)

}

function MyFunction(){
clearInterval(myInterval);
}

function stop(){
  clearInterval(myInterval);
  tens = 0;
  seconds = 0;
  minutes = 0;
  appendMinutes.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
  appendTens.innerHTML = (tens < 10) ? "0" + tens : tens;
  appendSeconds.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
  appendHours.innerHTML = (hours < 10) ? "0" + hours : hours ;
  }

function updateTimer(){
    tens++;

    if(tens > 99) {
        seconds++;
        tens = 0;
    }

    if(seconds > 60) {
      minutes++;
      seconds = 0;
  }
  if(minutes > 60) {
    hours++;
    minutes = 0;
}
    
    appendTens.innerHTML = (tens < 10) ? "0" + tens : tens;
    appendSeconds.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
    appendMinutes.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
    appendHours.innerHTML = (hours < 10) ? "0" + hours : hours ;
}
  