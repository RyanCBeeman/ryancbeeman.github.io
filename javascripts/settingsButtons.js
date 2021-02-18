//Settings Buttons

function cheat(){
  player.karma+=1000;
  console.log('cheated')
}

function localSave(){
  localStorage.setItem("savedTickSpeed", player.tickSpeed);
  localStorage.setItem("savedKarma", player.karma);
}

function localLoad(){
  player.tickSpeed = Number(localStorage.getItem("savedTickSpeed"));
  player.karma = Number(localStorage.getItem("savedKarma"));
}

function reset(){
  player.tickSpeed = 1000;
  player.karma = 0;
  player.storedSeeds = 0;
  clearInterval(intervalTick)
  intervalTick = window.setInterval(tick,tickSpeed)
}
function hardReset(){
  localStorage.setItem("savedTickSpeed", 1000);
  localStorage.setItem("savedKarma", 0);
  localStorage.setItem("savedNumIncrementers", 0);
  localStorage.setItem("savedNumIncrementers2", 0);
  localStorage.setItem("savedNumIncrementers3", 0);
  reset()
}