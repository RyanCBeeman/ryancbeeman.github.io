
function Plant(name, id, unlocked, canFindSeed, seedFindRate, growRate, description, information){
	this.name = name;
	this.id = id;	//position in seeds array
	this.unlocked = unlocked;
	this.canFindSeed = canFindSeed;
	this.seedFindRate = seedFindRate; 	//as percentage
	this.growRate = growRate;			//time to maturity in seconds
	this.description = description;
	this.information = information
}

const plantData = {
	/*Add: 	Karma gained from growing
			Karma lost when harvesting?? Probably not
			Seeds gained from harvesting

	*/

	Banksia: new Plant(
		'Banksia',
		0,
		true,
		true,
		50,
		30,
		'Large shrub...',
		'This plant is found in Australia... Fire allows it to spread its seeds...'
		),

	Pine: new Plant(
		'Pine',
		1,
		true,
		true,
		50,
		120,
		'Pine Tree',
		'Average size is...'
		),

	Dandelion: new Plant(
		'Dandelion',
		2,
		false,
		false,
		5,
		30,
		'Pretty flower...',
		'My favorite flower'
		),

	seedFindRate: [50,50,5],
	unlocked: [1,1,0],
	canFindSeed: [1,1,0],
	seedFindTotal: 0,

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

