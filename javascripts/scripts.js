var num = 0;
var numIncrementers = 0;
var numIncrementers2 = 0;
var numIncrementers3 = 0;
var tickSpeed = 1000
var intervalID = window.setInterval(tick, tickSpeed);
var intervalID = window.setInterval(update, 5);

function buttonPress() {
  num++;
}

function buyIncrementer(){
  if (num<10){
    notEnoughMessage()
  }else{
    num-=10;
    numIncrementers++;
    boughtMessage(1);
  }
}

function buyIncrementer2(){
  if (num<50){
    notEnoughMessage()
  }else{
    num-=50;
    numIncrementers2++;
    boughtMessage(2);
  }
}

function buyIncrementer3(){
  if (num<200){
    notEnoughMessage()
  }else{
    num-=200;
    numIncrementers3++;
    boughtMessage(3);
  }
}

function buyTickSpeed(){
  if (num<1000){
    notEnoughMessage()
  }else{
    num-=1000;
    tickSpeed*=0.8;
    window.setInterval(tick, tickSpeed);
    document.getElementById("notificationDisplay").innerHTML = "Tick speed reduced by 20% !";
  }
}

function boughtMessage(tier){
  document.getElementById("notificationDisplay").innerHTML = "Incrementer " + tier + ".0 bought!";
}

function notEnoughMessage(){
  document.getElementById("notificationDisplay").innerHTML = "You don't have enough!";
}

function tick() {
numIncrementers2+=numIncrementers3;
numIncrementers+=numIncrementers2;
num+=numIncrementers;
}

function update(){
document.getElementById("tickSpeedDisplay").innerHTML = "Current tick speed is " + (tickSpeed/1000).toFixed(5) + " S"
document.getElementById("display").innerHTML = "You have " + num;
document.getElementById("incrementerDisplay").innerHTML = "You have " + numIncrementers + " incrementers.";
document.getElementById("incrementerDisplay2").innerHTML = "You have " + numIncrementers2 + " incrementers 2.0."
document.getElementById("incrementerDisplay3").innerHTML = "You have " + numIncrementers3 + " incrementers 3.0."
}

function localSave(){
  localStorage.setItem("savedTickSpeed", tickSpeed);
  localStorage.setItem("savedNum", num);
  localStorage.setItem("savedNumIncrementers", numIncrementers);
  localStorage.setItem("savedNumIncrementers2", numIncrementers2);
  localStorage.setItem("savedNumIncrementers3", numIncrementers3);
}
function localLoad(){
  tickSpeed = Number(localStorage.getItem("savedTickSpeed"));
  num = Number(localStorage.getItem("savedNum"));
  numIncrementers = Number(localStorage.getItem("savedNumIncrementers"));
  numIncrementers2 = Number(localStorage.getItem("savedNumIncrementers2"));
  numIncrementers3 = Number(localStorage.getItem("savedNumIncrementers3"));
}

function reset(){
  tickSpeed = 1000;
  num = 0;
  numIncrementers = 0;
  numIncrementers2 = 0
  savedNumIncrementers3 = 0;
}
function hardReset(){
  tickSpeed = 1000;
  num = 0;
  numIncrementers = 0;
  numIncrementers2 = 0
  savedNumIncrementers3 = 0;
  localStorage.setItem("savedTickSpeed", 1000);
  localStorage.setItem("savedNum", 0);
  localStorage.setItem("savedNumIncrementers", 0);
  localStorage.setItem("savedNumIncrementers2", 0);
  localStorage.setItem("savedNumIncrementers3", 0);
}
