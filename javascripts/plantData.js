
const plantData = {
	/*Add: 	Karma gained from growing
			Karma lost when harvesting?? Probably not
			Seeds gained from harvesting

	*/

	BanksiaId: 0,
	PineId: 1,
	DandelionId: 2,

	name: ['Banksia','Pine','Dandelion'],
	unlocked: [1,1,0],
	canFindSeed: [1,1,0],
	seedFindRate: [50,50,5], // proprtional to others
	seedFindTotal: 0,
	growTime: [30,60,20], // in seconds
	seedsHarvested: [3,3,1],
	description: ['Large shrub...',
				  'Coniferous tree...',
				  'Pretty flower...'],

	information: ["This plant is found in Austrialo... Fire allows it to spread its seeds...",
				  "Average size is...",
				  "My favorite flower..."],

	updateUnlocked: function(idNum, newVal){
		this.unlocked(idNum) = newVal;
	},
	updateCanFindSeed: function(idNum, newVal){
		this.canFindSeed(idNum) = newVal;
	},
	updateSeedFindRate: function(idNum, newVal){
		this.seedFindRate(idNum) = newVal;
	},
	updateGrowRate: function(idNum, newVal){
		this.growRate(idNum) = newVal;
	},	
	updateSeedFindTotal: function() {
		s = 0;
		for (i = 0; i < this.unlocked.length; i++) {
			if (this.canFindSeed[i]){
				s += this.seedFindRate[i];
			}
		}
			this.seedFindTotal = s;
		}
	
}

