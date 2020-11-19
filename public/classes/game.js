import { Loom } from "./loom.js";
import { Player } from "./player.js";
import { drawColorPicker, drawOwnedTextiles } from "../functions/allDrawing.js";

export class Game{
	//consturctor should be passed:
	//  playerObj - an object of class player
	//  loomOby - an object of class loom
	constructor(playerObj, loomObj){
		this.player = playerObj;
		this.loom = loomObj;
	}

	constructLoomUI(){
		//loom area
		drawColorPicker(this.player.availableColors);
	}

	makeTextile(){
		this.constructLoomUI();
		//this assumes you have to finish a textile before you can do something else, but you should be able to pause and such
		this.player.addOwnedTextile(this.loom.startTextile()); 
		this.loom.clearWorkingTextile();
	}

	listOwnedTextiles(){
		drawOwnedTextiles(this.player.ownedTextiles);
	}


}