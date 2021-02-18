//calculates ticks and updates
var intervalTick = window.setInterval(tick, player.tickSpeed);
var intervalUpdate = window.setInterval(updateGame, 5);
var intervalUpdate = window.setInterval(updateDisplay, 5);


function notify(message){
  	notificationArray.unshift(message);
  	notificationArray.pop();
}

function showNotifications(){
  	notificationDisplay.innerHTML = notificationArray.join("<br>");
}

function tick(){


}

function updateGame(){
	plantData.updateSeedFindTotal(); //Doesn't need to run every update
	player.totalSeeds = player.seeds.reduce((a,b) => a+b, 0);
}

function updateDisplay(){
	checkForChanges();
 	karmaDisplay.innerHTML = "You have " + player.karma + " Karma";
  	seedDisplay.innerHTML = player.totalSeeds + "/" + player.seedStorageSpace + " seeds.";
  	plantsGrowingDisplay.innerHTML = player.plantsGrowing + " are growing";
  	plantsGrownDisplay.innerHTML = player.plantsGrown + " are grown";
  	showNotifications();
}

function checkForChanges(){
  if(player.karma>=10){
      plantsTable.style.display = "inline-block";
  }

}
