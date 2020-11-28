var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { drawColorPicker, drawOwnedTextiles } from "../functions/allDrawing.js";
export class Game {
    constructor(gameOptions) {
        this.player = gameOptions.player;
        this.loom = gameOptions.loom;
    }
    constructLoomUI() {
        drawColorPicker(this.player.availableColors);
    }
    makeTextile() {
        return __awaiter(this, void 0, void 0, function* () {
            this.constructLoomUI();
            this.player.addOwnedTextile(yield this.loom.startWeaving());
            this.loom.clearWorkingWeave();
        });
    }
    listOwnedTextiles() {
        drawOwnedTextiles(this.player.ownedTextiles);
    }
}
