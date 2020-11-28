import { AvailableColors } from "../classes/player.js";
import { Textile } from "../classes/textile.js";
import { baseGameInfo } from "../gameInfo/baseGameInfo.js";

export function drawLoomWeavingArea(height: number, width: number){
	$("#loomCanvas").html(`<canvas id="loom" width="${width}" height="${height}" style="border:1px solid #000000;"></canvas>`);
}

export function drawColorPicker(colors: AvailableColors): void {
	let colorButtonHtml = "";

	for(const color of Object.keys(colors)) {
		colorButtonHtml += `
			<input id="${color}" type="radio" name="colorPick">${color}</input> 
		`;
	}

	$("#colorPicker").html(colorButtonHtml);
}

export function drawLoomState(
  numWarps: number,
  numRows: number,
  rowOn: number,
  textile: Textile,
  loomHeight: number,
  loomWidth: number,
): void {
  let c = document.getElementById("loom");
  
  // TODO: come up with a good way to pass around a typechecked canavs and ctx
  if (c == null) {
    throw new Error('Could not find the loom element');
  }
  const canvas: HTMLCanvasElement = c as any;

  const ctx = canvas.getContext("2d");
  if (ctx == null) {
    throw new Error('Could not create a context');
  }

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	const space = loomWidth / (numWarps + 1);
	let curSpace = space;
	const rowHeight = loomHeight / numRows;
	let curRowHeight = loomHeight - (rowHeight * rowOn);


	for(let i = 0; i < numWarps; i++){
		ctx.beginPath();
		//draw warps
		ctx.strokeStyle = "#ff0000"; //This should be taken from the color of the thread used for this
		ctx.moveTo(curSpace, 0);
		ctx.lineTo(curSpace, (curRowHeight - rowHeight));
		ctx.stroke();

		//draw input circles
		ctx.strokeStyle = "#000000";
		ctx.beginPath();
		ctx.arc(curSpace, curRowHeight - (rowHeight/2), (rowHeight/2), 0, 2 * Math.PI);
		ctx.stroke();

		//draw the finished rows
		if(textile.weaveRows.length > 0){
        	let weaveRowHeight = curRowHeight;
            for(let j = 0; j < textile.weaveRows.length; j++){
				ctx.strokeStyle = ctx.fillStyle = baseGameInfo.possibleColors[textile.weaveRows[j].colors[i]];
				ctx.fillRect(curSpace - (space/2), weaveRowHeight, space, rowHeight);
				weaveRowHeight += rowHeight;
			}
		}

		curSpace += space;
	}
}

export function drawOwnedTextiles(textiles: Array<Textile>): void {
	let textileText = "<ul>"
	for(const textile of textiles){
		textileText += `<li> ${textile.name} </li>`;
	}
	textileText += "</ul>";
	$("#ownedTextiles").html(textileText);
}