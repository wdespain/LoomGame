import { Color, TextileState, WarpConfig } from "../model/types";

export interface TextileOptions {
  cols: number;
  name: string;
}

export class Textile implements TextileState{
  name: string;
  warpNum: number;
  weaveRows: Array<Array<WarpConfig>>

	constructor(options: TextileOptions) {
		this.name = options.name;
		this.warpNum = options.cols;
		this.weaveRows = [];
	}

	addRow(row: Array<WarpConfig>) {
		this.weaveRows.push(row);
	}
}