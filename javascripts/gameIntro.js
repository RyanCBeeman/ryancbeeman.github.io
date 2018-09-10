
var introPos = 0;
var currentIntroText = document.getElementById("introButton");

currentIntroText.innerHTML = "You wake up";

var introTextArray = [
  "It sucks here",
  "You are angry",
  "You kick a rock",
  "It breaks a plant",
  "There aren't many of those left",
  "You feel bad",
  "You plant a seed",
  "It's a little better here"
];

function runIntroText(){
  currentIntroText.innerHTML = introTextArray[introPos];
  switch(introPos) {
    case 3:
        karma-=5;
        break;
    case 4:
        karma-=10
        break;
    case 7:
        karma++;
        break;
    case 8:
        currentIntroText.style.display = "none";
        document.getElementById("plantButton").style.display = "inline-block";
    default:
        break;
}
  introPos++;
}
