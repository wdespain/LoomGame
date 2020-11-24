import { Loom } from "./loom.js";
import { Player } from "./player.js";
import { drawColorPicker, drawOwnedTextiles } from "../functions/allDrawing.js";

export interface GameOptions {
  player: Player;
  loom: Loom;
}

export class Game {
  player: Player;
  loom: Loom;
  
	constructor(gameOptions: GameOptions) {
		this.player = gameOptions.player;
		this.loom = gameOptions.loom;
	}

	constructLoomUI(){
		//loom area
		drawColorPicker(this.player.availableColors);
	}

	async makeTextile(){
		this.constructLoomUI();
		//this assumes you have to finish a textile before you can do something else, but you should be able to pause and such
		this.player.addOwnedTextile(await this.loom.startWeaving()); 
		this.loom.clearWorkingWeave();
	}

	listOwnedTextiles(){
		drawOwnedTextiles(this.player.ownedTextiles);
	}
}