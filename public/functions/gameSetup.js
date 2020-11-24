import { Game } from "../classes/game.js";
import { Loom } from "../classes/loom.js";
import { Player } from "../classes/player.js";
export function gameSetup(playerOptions, loomOptions) {
    return new Game({
        player: new Player(playerOptions),
        loom: new Loom(loomOptions),
    });
}
