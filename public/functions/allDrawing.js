import { Textile } from "../classes/textile.js";
import { baseGameInfo } from "../gameInfo/baseGameInfo.js";

export function drawLoomWeavingArea(height, width){
	$("#loomCanvas").html(`<canvas id="loom" width="${width}" height="${height}" style="border:1px solid #000000;"></canvas>`);
}

export function drawColorPicker(colors){
	let colorButtonHtml = "";

	for(const color of colors){
		colorButtonHtml += `
			<input id="${color}" type="radio" name="colorPick">${color}</input> 
		`;
	}

	$("#colorPicker").html(colorButtonHtml);
}

export function drawLoomState(numWarps, numRows, rowOn, textile, loomHeight, loomWidth){
	let c = document.getElementById("loom");
	let ctx = c.getContext("2d");
	ctx.clearRect(0, 0, c.width, c.height);
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
			//debugger;
			for(let j = 0; j < textile.weaveRows.length; j++){
				ctx.strokeStyle = ctx.fillStyle = baseGameInfo.possibleColors[textile.weaveRows[j].colors[i]];
				ctx.fillRect(curSpace - (space/2), weaveRowHeight, space, rowHeight);
				weaveRowHeight += rowHeight;
			}
		}

		curSpace += space;
	}
}

export function drawOwnedTextiles(textiles){
	let textileText = "<ul>"
	for(const textile of textiles){
		textileText += `<li> ${textile.name} </li>`;
	}
	textileText += "</ul>";
	$("#ownedTextiles").html(textileText);
}