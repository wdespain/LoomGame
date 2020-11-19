export class Textile{
	//options is a json that should include:
	//  cols - int, the number of warp threads (collumns)
	//  name - string, the name of the textile
	constructor(cols, name){
		this.warpNum = cols;
		this.weaveRows = [];
	}

	//rowInfo should have:
	//  weave : a list of 0 or 1 indicating if the warp or the weft is on top, respectively
	//  colors : a list of string colors matching the length of the above list, indicating the color
	addRow(rowInfo){
		this.weaveRows.push(rowInfo);
	}
}