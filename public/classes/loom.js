var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Textile } from "./textile";
import { drawLoomWeavingArea, drawLoomState } from "../functions/allDrawing.js";
import { inputLoomRow } from "../functions/input.js";
export class Loom {
    constructor(options) {
        this.height = options.height;
        this.width = options.width;
        this.workingWeave = null;
    }
    getUserInput() {
        return {
            "cols": 6,
            "rows": 10,
            "name": "test"
        };
    }
    startWeaving() {
        return __awaiter(this, void 0, void 0, function* () {
            const userInput = this.getUserInput();
            drawLoomWeavingArea(this.height, this.width);
            this.workingWeave = new Textile(userInput.cols, 'warfidome');
            for (let i = 0; i <= userInput.rows; i++) {
                drawLoomState(userInput.cols, userInput.rows, i, this.workingWeave, this.height, this.width);
                const rowInput = yield inputLoomRow();
                this.workingWeave.addRow(rowInput);
            }
            return this.workingWeave;
        });
    }
    clearWorkingWeave() {
        this.workingWeave = null;
    }
}
