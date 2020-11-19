const urlPath = "http://localhost:3000";

//get functions and classes and all that stuff
import { Game } from "./classes/game.js";
import { gameSetup } from "./functions/gameSetup.js";
import { baseGameInfo } from "./gameInfo/baseGameInfo.js";

//setup function
function runSetup(){
	const playerOptions = {
		"availableColors" : [ "black", "red" ]
	};

	const loomOptions = {
		"height" : 600,
		"width" : 600
	}

	return gameSetup(playerOptions, loomOptions);
}

async function runGame(){
	let game = runSetup();

	while(true){
		game.listOwnedTextiles();
		await game.makeTextile();
	}

}

runGame();