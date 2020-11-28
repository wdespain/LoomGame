var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const urlPath = "http://localhost:3000";
import { gameSetup } from "./functions/gameSetup.js";
function runSetup() {
    const playerOptions = {
        "availableColors": {
            "black": '#000000',
            "red": "#FF0000",
        },
    };
    const loomOptions = {
        "height": 600,
        "width": 600
    };
    return gameSetup(playerOptions, loomOptions);
}
function runGame() {
    return __awaiter(this, void 0, void 0, function* () {
        let game = runSetup();
        while (true) {
            game.listOwnedTextiles();
            yield game.makeTextile();
        }
    });
}
runGame();
