import { Game } from "../classes/game.js";
import { Loom } from "../classes/loom.js";
import { Player } from "../classes/player.js";

//playerOptions is a json that should include:
//  availableColors - a list string of colors
//loomOptions is a json that should include:
//  height - int
//  width - int
export function gameSetup(playerOptions, loomOptions){
	return new Game(new Player(playerOptions), new Loom(loomOptions));
}