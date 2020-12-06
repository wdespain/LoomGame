import { Textile } from "./textile";
import { drawLoomWeavingArea, drawLoomState } from "../functions/allDrawing.js";
import { inputLoomRow } from "../functions/input.js";
import { LoomState, WarpPosition } from "../model/types.js";

export interface LoomOptions {
    height: number;
    width: number;
}

export class Loom {
    height: number;
    width: number;

		workingTextile: Textile | null;
		workingRow: number;

	constructor(options: LoomOptions){
		this.height = options.height;
		this.width = options.width;

		this.workingTextile = null;
		this.workingRow = 0;
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

    async startWeaving() {
        const userInput = this.getUserInput();
        const textile = new Textile(userInput);
        const loomState: LoomState = {
            numWarps: userInput.cols,
            numRows: userInput.rows,
            loomHeight: this.height,
            loomWidth: this.width,
            textile,
            // TODO make this magic range code a util https://stackoverflow.com/a/37980601/14308614
            warpState: [...Array(userInput.cols).keys()].map(_ => ({
            position: WarpPosition.Under,
            weftColor: 'blue', // This default should be taken from the list of thread colors
            })),
    	};
		this.workingTextile = textile

		const redraw = () => {
			if (this.workingTextile != null) {
				for (let i = 0; i <= userInput.rows; i++) {
					drawLoomState(loomState, this.workingTextile, this.workingRow, redraw);
				}
			}
		}

		for(let i = 0; i <= userInput.rows; i++){
			this.workingRow = i;
			drawLoomWeavingArea(this.height, this.width);
			const loomCanvasInputs = drawLoomState(loomState, this.workingTextile, i, redraw);
			
            const rowInput = await inputLoomRow(loomState, loomCanvasInputs);

            this.workingTextile.addRow(rowInput);
		}

		return this.workingTextile;
	}

	clearWorkingTextile(){
		this.workingTextile = null;
	}
}