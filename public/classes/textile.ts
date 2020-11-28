import { RowInfo } from "../model/types";

export class Textile{
  warpNum: number;
  weave: Array<RowInfo>

	constructor(cols: number, name: string) {
		this.warpNum = cols;
		this.weave = [];
	}

	addRow(rowInfo: RowInfo) {
		this.weave.push(rowInfo);
	}
}