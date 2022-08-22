
var introPos = 0;
var currentIntroText = getElement("introButton");

currentIntroText.innerHTML = "You wake up";

var introTextArray = [
  "It sucks here", //1
  "The land is scorched and desolate",
  "You are angry",
  "Kick a rock",
  "It breaks a plant",
  "There aren't many of those left", //5
  "You feel bad",
  "You find a small seed",
  "Plant the seed",
  "It's a little better here"
];

function skipIntro(){
  getElement('plantsDisplay').style.display = "inline-block";
  getElement("plantSeedsButton").style.display = "inline-block";
  getElement("gatherSeedsButton").style.display = "inline-block";
  getElement("seedDisplay").style.display = "inline-block";
  currentIntroText.style.display = "none";
  player.karmaPoints = 100;
  player.seeds[plantData.BanksiaId] = 1;
}

function runIntroText(){
  currentIntroText.innerHTML = introTextArray[introPos];
  notify(introTextArray[introPos-1])
  switch(introPos) {
    case 0:
        notify("You wake up");
        break
    case 4:
        player.karmaPoints-=5;
        break;
    case 5:
      player.karmaPoints-=10
        break;
    case 8:
        player.seeds[1]++;
        getElement("seedDisplay").style.display = "inline-block";
        break;
    case 9:
        player.seeds[1]--;
        player.karmaPoints++;
        break;
    case 10:
        notify("It's a little better here");
        currentIntroText.style.display = "none";
        getElement("plantSeedsButton").style.display = "inline-block";
        getElement("gatherSeedsButton").style.display = "inline-block";
        getElement("seedsPlantedDisplay").style.display = "inline-block";
        getElement("plantsGrowingDisplay").style.display = "inline-block";
        getElement("plantsTable").style.display = "inline-block";
    default:
        break;
}
  introPos++;
}
