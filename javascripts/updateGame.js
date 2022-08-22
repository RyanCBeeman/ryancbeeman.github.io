//calculates ticks and updates
var intervalTick = window.setInterval(tick, player.tickSpeed);
var intervalUpdate = window.setInterval(updateGame, 5);
var intervalUpdate = window.setInterval(updateDisplay, 5);


function tick(){


}

function updateGame(){
	plantData.updateSeedFindTotal(); //TODO: Doesn't need to run every update
	player.totalSeeds = player.seeds.reduce((a,b) => a+b, 0);
}

function updateDisplay(){
	checkForChanges();
  getElement("karmaDisplay").innerHTML = "You have " + player.karmaPoints + " Karma";

  getElement("seedDisplay").innerHTML = player.totalSeeds + "/" + player.seedStorageSpace + " seeds";
  getElement("seedsPlantedDisplay").innerHTML = player.seedsPlanted + " seeds are planted";
  getElement("plantsGrowingDisplay").innerHTML = player.plantsGrowing + " plants are growing";
  getElement("plantsGrownDisplay").innerHTML = player.plantsGrown + " plants are grown";
}

function checkForChanges(){
  if(player.karma>=10){
      plantsTable.style.display = "inline-block";
  }
}


function changeTab(newTabid){
  oldTabid = player.currentTab;
  if(newTabid != oldTabid){
    getElement(newTabid).style.zIndex = "3";
    getElement(oldTabid).style.zindex = "2";
    newDisplayid = newTabid.substring(0, newTabid.length - 3) + "Display";
    oldDisplayid = oldTabid.substring(0, oldTabid.length - 3) + "Display";
    getElement(oldDisplayid).style.display = 'none';
    getElement(newDisplayid).style.display = 'inline-block';
    player.currentTab = newTabid;
  };
};