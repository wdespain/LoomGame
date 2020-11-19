export class Player{
	//options is a json that should contain:
	//  availableColors - a map of colors with associated hex codes
	constructor(options){
		//options things
		this.availableColors = options.availableColors;

		//other things
		this.ownedTextiles = [];
	}

	addOwnedTextile(textile){
		this.ownedTextiles.push(textile);
	}
}