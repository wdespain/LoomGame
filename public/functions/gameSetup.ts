import { Game } from "../classes/game.js";
import { Loom, LoomOptions } from "../classes/loom.js";
import { Player, PlayerOptions } from "../classes/player.js";

export function gameSetup(
  playerOptions: PlayerOptions,
  loomOptions: LoomOptions,
): Game {
	return new Game({
    player: new Player(playerOptions),
    loom: new Loom(loomOptions),
  });
}