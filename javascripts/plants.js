//Everything related to seeds and plants

function plantSeed() {
  if (player.totalSeeds <= 0) {
        notify('No seeds to plant')
  }else{
    i = pickSeedToPlant();
    player.seeds[i]--;
    player.plantsGrowing[i]++;
    player.karma++;
  }
}

function gatherSeed() {
  if (player.totalSeeds >= player.seedStorageSpace) {
    notify("Can't hold anymore seeds")
  }else{
    i = pickSeedToFind();
    player.seeds[i]++;
  }
}

function pickSeedToPlant(){
  i = 0;
  x = Math.floor(Math.random()*player.totalSeeds) + 1;
  while(x > 0){
    x = x-player.seeds[i];
    i++;
  }
  i--;
  return i;
}


function pickSeedToFind(){
  i = 0;
  x = Math.floor(Math.random()*plantData.seedFindTotal) + 1;
  while(x > 0){
    if (plantData.canFindSeed[i]) {
      x=x-plantData.seedFindRate[i];
    }
    i++;
  }
  i--;
  return i;
}

function waterPlant(){
  i=0;
  if(player.plantsGrowing[i] > 0){
    beginGrowingPlant(i);
  }else{
    notify("No plant to water")
  }
}

function harvestPlant(){
  i=0;
  if(player.plantsGrown[i] > 0){
      player.plantsGrown[i]--;
      player.seeds[i]+=5;
  }else{
    notify("No plant to water")
  }


}

function beginGrowingPlant(plantId){
  //player.seeds[plantId]--;
  //player.plantsGrowing[plantId]++;
  t = plantData.growTime[plantId]*200; // convert seconds to miliseconds
  console.log(t);
    setTimeout(()=>endGrowingPlant(plantId), t);
}

function endGrowingPlant(plantId){
  player.plantsGrowing[plantId]--;
  player.plantsGrown[plantId]++;
  console.log(plantData.name[plantId] + " has fully grown")
  notify(plantData.name[plantId] + " has fully grown")
}