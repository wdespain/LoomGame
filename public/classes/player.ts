/** A mapping of color name to hexcode */
export interface AvailableColors {
  [color: string]: string
}

export interface PlayerOptions {
  availableColors: AvailableColors,
}

type TempTypeTextile = any;

export class Player {
  availableColors: AvailableColors;
  ownedTextiles: Array<TempTypeTextile>;

	constructor(options: PlayerOptions) {
		this.availableColors = options.availableColors;
		this.ownedTextiles = [];
	}

	addOwnedTextile(textile: TempTypeTextile) {
		this.ownedTextiles.push(textile);
	}
}