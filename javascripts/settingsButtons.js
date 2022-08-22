//Settings Buttons
function cheat(){
  player.karmaPoints+=1000;
  console.log('cheated')
};

//functions for loading and saving
function localSave(){
	localStorage.setItem("KarmaSave", JSON.stringify(player));
	console.log(player.karmaPoints)
};
  //todo: this should probably pass into the playerData constructor so that updates can add new properties to player easier
function localLoad(){
	let saveImport = localStorage.getItem("KarmaSave");
	if(saveImport == ""){
	  player = new playerData;
	} else{
	  player = JSON.parse(saveImport || "");
	}
	console.log(player.karmaPoints)
};
  
function resetSave(){
	player = new playerData
	console.log(player.karmaPoints);
};

function hardResetSave(){
	reset();
	localSave();
};