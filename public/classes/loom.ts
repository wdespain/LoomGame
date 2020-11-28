import { Textile } from "./textile";
import { drawLoomWeavingArea, drawLoomState } from "../functions/allDrawing.js";
import { inputLoomRow } from "../functions/input.js";

export interface LoomOptions {
  height: number;
  width: number;
}

export class Loom {
  height: number;
  width: number;

  workingTextile: Textile | null;

	constructor(options: LoomOptions){
		this.height = options.height;
		this.width = options.width;

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

	async startWeaving(){
		const userInput = this.getUserInput();

		drawLoomWeavingArea(this.height, this.width);

		this.workingTextile = new Textile(userInput);

		for(let i = 0; i <= userInput.rows; i++){
			drawLoomState(userInput.cols, userInput.rows, i, this.workingTextile, this.height, this.width); //Should find a better way? we're passing a lot here
			
			const rowInput = await inputLoomRow();
			this.workingTextile.addRow(rowInput);
		}

		return this.workingTextile;
	}

	clearWorkingTextile(){
		this.workingTextile = null;
	}
}