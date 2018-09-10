//create and set initial variables
var karma = 0;
var numIncrementers = 0;
var numIncrementers2 = 0;
var numIncrementers3 = 0;
var tickSpeed = 1000
var intervalID = window.setInterval(tick, tickSpeed);
var intervalID = window.setInterval(update, 5);

//save displays as objects
var tickSpeedDisplay = document.getElementById("tickSpeedDisplay")
var karmaDisplay = document.getElementById("karmaDisplay");
var incrementDisplay = document.getElementById("incrementerDisplay");
var incrementDisplay2 = document.getElementById("incrementerDisplay2")
var incrementDisplay3 = document.getElementById("incrementerDisplay3")
var notificationDisplay = document.getElementById("notificationDisplay");
var notificationArray = ["","","","",""]//array to hold notificaion messages


//button functions
function buttonPress() {
  karma++;
}

function buyIncrementer(){
  if (karma<10){
    notEnoughMessage()
  }else{
    karma-=10;
    numIncrementers++;
    notify("Bought Incrementer!");
  }
}

function buyIncrementer2(){
  if (karma<50){
    notEnoughMessage()
  }else{
    karma-=50;
    numIncrementers2++;
    notify("Bought Incrementer 2.0!");
  }
}

function buyIncrementer3(){
  if (karma<200){
    notEnoughMessage()
  }else{
    karma-=200;
    numIncrementers3++;
    notify("Bought Incrementer 3.0!");
  }
}

function buyTickSpeed(){
  if (karma<1000){
    notEnoughMessage()
  }else{
    karma-=1000;
    tickSpeed*=0.8;
    window.setInterval(tick, tickSpeed);
    notify("Tick Speed Reduced By 20% !");
  }
}

function cheat(){
  karma+=1000;
}

function notify(message){
  notificationArray.unshift(message);
  notificationArray.pop();
}

function notEnoughMessage(){
  notificationArray.unshift("Not Enough!");
  notificationArray.pop();
}

function showNotifications(){
  notificationDisplay.innerHTML = notificationArray.join("<br>");
}

function tick(){
numIncrementers2+=numIncrementers3;
numIncrementers+=numIncrementers2;
karma+=numIncrementers;
}


function update(){
tickSpeedDisplay.innerHTML = "Current tick speed is " + (tickSpeed/1000).toFixed(5) + " S"
karmaDisplay.innerHTML = "You have " + karma + " Karma";
incrementDisplay.innerHTML = "You have " + numIncrementers + " incrementers.";
incrementDisplay2.innerHTML = "You have " + numIncrementers2 + " incrementers 2.0."
incrementDisplay3.innerHTML = "You have " + numIncrementers3 + " incrementers 3.0."
showNotifications();
}

function localSave(){
  localStorage.setItem("savedTickSpeed", tickSpeed);
  localStorage.setItem("savedKarma", karma);
  localStorage.setItem("savedNumIncrementers", numIncrementers);
  localStorage.setItem("savedNumIncrementers2", numIncrementers2);
  localStorage.setItem("savedNumIncrementers3", numIncrementers3);
}
function localLoad(){
  tickSpeed = Number(localStorage.getItem("savedTickSpeed"));
  karma = Number(localStorage.getItem("savedKarma"));
  numIncrementers = Number(localStorage.getItem("savedNumIncrementers"));
  numIncrementers2 = Number(localStorage.getItem("savedNumIncrementers2"));
  numIncrementers3 = Number(localStorage.getItem("savedNumIncrementers3"));
}

function reset(){
  tickSpeed = 1000;
  karma = 0;
  numIncrementers = 0;
  numIncrementers2 = 0
  savedNumIncrementers3 = 0;
}
function hardReset(){
  tickSpeed = 1000;
  karma = 0;
  numIncrementers = 0;
  numIncrementers2 = 0
  savedNumIncrementers3 = 0;
  localStorage.setItem("savedTickSpeed", 1000);
  localStorage.setItem("savedKarma", 0);
  localStorage.setItem("savedNumIncrementers", 0);
  localStorage.setItem("savedNumIncrementers2", 0);
  localStorage.setItem("savedNumIncrementers3", 0);
}
