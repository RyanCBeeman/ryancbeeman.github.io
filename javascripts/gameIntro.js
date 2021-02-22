
var introPos = 0;
var currentIntroText = document.getElementById("introButton");

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
  plantsPageDisplay.style.display = "inline-block";
  document.getElementById("plantSeedsButton").style.display = "inline-block";
  document.getElementById("gatherSeedsButton").style.display = "inline-block";
  document.getElementById("seedDisplay").style.display = "inline-block";
  currentIntroText.style.display = "none";
  player.karma = 100;
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
        karma-=5;
        break;
    case 5:
        karma-=10
        break;
    case 8:
        storedSeeds++;
        document.getElementById("seedDisplay").style.display = "inline-block";
        break;
    case 9:
        storedSeeds--;
        karma++;
        break;
    case 10:
        notify("It's a little better here");
        currentIntroText.style.display = "none";
        document.getElementById("plantSeedsButton").style.display = "inline-block";
        document.getElementById("gatherSeedsButton").style.display = "inline-block";
    default:
        break;
}
  introPos++;
}
