import { Textile } from "./textile.js";
import { drawLoomWeavingArea, drawLoomState } from "../functions/allDrawing.js";

export class Loom{
	//options is a json that should contain:
	//  height - int
	// 	width - int
	constructor(options){
		//option things
		this.height = options.height;
		this.width = options.width;

		//other things
		this.workingTextile = null;
	}

	getUserInput(){
		//add something here to actually get input
		//alse names should be unique
		return { 
			"cols" : 6,
			"rows" : 10,
			"name" : "test"
		}
	}

	startTextile(){
		const userInput = this.getUserInput();

		drawLoomWeavingArea(this.height, this.width);

		this.workingTextile = new Textile(userInput.cols);

		$("#next").on("click", function(){
			//get user input (dumy stuff for now)
			let input = { "weave" : [0, 1, 0, 1, 0, 1], "colors" : ["red", "blue", "red", "blue", "red", "blue"] }
			this.workingTextile.addRow(input);

		})

		for(let i = 0; i <= userInput.rows; i++){
			drawLoomState(userInput.cols, userInput.rows, i, this.workingTextile, this.height, this.width); //Should find a better way? we're passing a lot here
			
			//Need to await!!!
		}

		return this.workingTextile;
	}

	clearWorkingTextile(){
		this.workingTextile = null;
	}
}