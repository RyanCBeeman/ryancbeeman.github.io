/*
const newSave  = {
	karmaPoints: 0 ;

	wildSeeds: 10 ;

	seeds: [0, 	//banksia
			0,	//pine
			0],	//dandelion

	totalSeeds: 0,
	seedStorageSpace: 10,
	
	wildLand: 100,
	land: 10,

	seedsPlanted: [0,0,0],
	plantsGrowing: [0,0,0],
	plantsGrown: [0,0,0],


	smarts: [0,  //seeds
			 0,	 //plants
			 0], //harvesting

	upgrades: [0,0,0, //seed upgrades
			   0,0,0,
			   0,0,0],

	tickSpeed: 1000,
	currentTab: 'plants'

};
*/

class playerData {
	constructor(){
	this.karmaPoints=  0;

	this.wildSeeds = 10;

	this.seeds = [0, 	//banksia
			0,	//pine
			0];	//dandelion

	this.totalSeeds = 0;
	this.seedStorageSpace = 10;
	
	this.wildLand = 100;
	this.land = 10;

	this.seedsPlanted = [0,0,0];
	this.plantsGrowing = [0,0,0];
	this.plantsGrown = [0,0,0];


	this.smarts = [0,  //seeds
			 0,	 //plants
			 0]; //harvesting

	this.upgrades = [0,0,0, //seed upgrades
			   0,0,0,
			   0,0,0];

	this.tickSpeed = 1000;
	this.currentTab = "plantsTab"
	};
};

let player = new playerData;

