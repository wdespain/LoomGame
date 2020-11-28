export class Player {
    constructor(options) {
        this.availableColors = options.availableColors;
        this.ownedTextiles = [];
    }
    addOwnedTextile(textile) {
        this.ownedTextiles.push(textile);
    }
}
