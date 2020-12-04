import { AvailableColors } from "../classes/player.js";
import { Textile } from "../classes/textile.js";
import { baseGameInfo } from "../gameInfo/baseGameInfo.js";
import { LoomCanvasInputs, LoomState, WarpInputCircle, WarpPosition } from "../model/types.js";
import { getCanvasAndContext } from "./canvas.js";

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

export function createWarpInputCircle(
  warpIndex: number,
  curSpace: number,
  curRowHeight: number,
  rowHeight: number,
): WarpInputCircle {
  return {
    warpIndex,
    center: {
      x: curSpace,
      y: curRowHeight - (rowHeight/2),
    },
    radius: rowHeight/2,
  };
}

/**
 * Draw the loom on the canvas. Returns input information for actions on the canvas.
 */
export function drawLoomState(
    loomState: LoomState,
    textile: Textile,
    rowOn: number,
): LoomCanvasInputs {
    const { numWarps, numRows, loomHeight, loomWidth } = loomState;
    const { canvas, context: ctx } = getCanvasAndContext();
    const loomCanvasInputs: LoomCanvasInputs = {
        warpInputCircles: [],
    };

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
        const warpCircle = createWarpInputCircle(i, curSpace, curRowHeight, rowHeight);
		ctx.strokeStyle = "#000000";
		ctx.beginPath();
		ctx.arc(warpCircle.center.x, warpCircle.center.y, warpCircle.radius, 0, 2 * Math.PI);
        ctx.stroke();
        loomCanvasInputs.warpInputCircles.push(warpCircle);

		//draw the finished rows
		if(textile.weaveRows.length > 0) {
            let weaveRowHeight = curRowHeight;

            for (let j = 0; j < textile.weaveRows.length; j++) {
                const warpConfig = textile.weaveRows[j][i];

                // WarpPosition.Over means the warp thread is over the wefts
                const color = warpConfig.position === WarpPosition.Over
                    ? 'red' // this should be the color of the warp thread
                    : warpConfig.weftColor;

                ctx.strokeStyle = ctx.fillStyle = baseGameInfo.possibleColors[color];
                ctx.fillRect(curSpace - (space/2), weaveRowHeight, space, rowHeight);
                weaveRowHeight += rowHeight;
			}
        }

		curSpace += space;
    }
  
  return loomCanvasInputs;
}

export function drawOwnedTextiles(textiles: Array<Textile>): void {
	let textileText = "<ul>"
	for(const textile of textiles){
		textileText += `<li> ${textile.name} </li>`;
	}
	textileText += "</ul>";
	$("#ownedTextiles").html(textileText);
}