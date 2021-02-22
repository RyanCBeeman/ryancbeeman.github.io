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
  seedDisplay.innerHTML = player.totalSeeds + "/" + player.seedStorageSpace + " seeds";
  seedsPlantedDisplay.innerHTML = player.seedsPlanted + " seeds are planted";
  plantsGrowingDisplay.innerHTML = player.plantsGrowing + " plants are growing";
  plantsGrownDisplay.innerHTML = player.plantsGrown + " plants are grown";
  showNotifications();
}

function checkForChanges(){
  if(player.karma>=10){
      plantsTable.style.display = "inline-block";
  }

}


function changeTab(newTab){
  if(newTab!==player.currentTab){
    player.currentTab=newTab;
    clearDisplay();
    switch(newTab){
      case 'plants':
        console.log('in plants tab');
        plantsTabDisplay.style.zIndex="3";
        smartsTabDisplay.style.zIndex="2";
        plantsPageDisplay.style.display='inline-block';
        break;
      case 'smarts':
        console.log('in smarts tab');
        plantsTabDisplay.style.zIndex="2";
        smartsTabDisplay.style.zIndex="3";
        smartsPageDisplay.style.display='inline-block';
        break;
    }
  }

}

function clearDisplay(){
  plantsPageDisplay.style.display='none';
  smartsPageDisplay.style.display='none';
}