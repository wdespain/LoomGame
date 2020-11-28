export class Textile {
    constructor(cols, name) {
        this.warpNum = cols;
        this.weave = [];
    }
    addRow(rowInfo) {
        this.weave.push(rowInfo);
    }
}
