import { Textile } from "./textile.js";
import { drawLoomWeavingArea, drawLoomState } from "../functions/allDrawing.js";
import { inputLoomRow } from "../functions/input.js";

export class Loom{
	//options is a json that should contain:
	//  height - int
	// 	width - int
	constructor(options){
		//option things
		this.height = options.height;
		this.width = options.width;

		//other things
		this.workingWeave = null;
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

	async startWeaving(){
		const userInput = this.getUserInput();

		drawLoomWeavingArea(this.height, this.width);

		this.workingWeave = new Textile(userInput.cols);

		for(let i = 0; i <= userInput.rows; i++){
			drawLoomState(userInput.cols, userInput.rows, i, this.workingWeave, this.height, this.width); //Should find a better way? we're passing a lot here
			
			const rowInput = await inputLoomRow();
			this.workingWeave.addRow(rowInput);
		}

		return this.workingWeave;
	}

	clearWorkingWeave(){
		this.workingWeave = null;
	}
}