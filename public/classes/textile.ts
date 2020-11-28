import { RowInfo } from "../model/types";

export interface TextileOptions {
  cols: number;
  name: string;
}

export class Textile{
  name: string;
  warpNum: number;
  weaveRows: Array<RowInfo>

	constructor(options: TextileOptions) {
		this.name = options.name;
		this.warpNum = options.cols;
		this.weaveRows = [];
	}

	addRow(rowInfo: RowInfo) {
		this.weaveRows.push(rowInfo);
	}
}