import { baseGameInfo } from "../gameInfo/baseGameInfo.js";
export function drawLoomWeavingArea(height, width) {
    $("#loomCanvas").html(`<canvas id="loom" width="${width}" height="${height}" style="border:1px solid #000000;"></canvas>`);
}
export function drawColorPicker(colors) {
    let colorButtonHtml = "";
    for (const color of Object.keys(colors)) {
        colorButtonHtml += `
			<input id="${color}" type="radio" name="colorPick">${color}</input> 
		`;
    }
    $("#colorPicker").html(colorButtonHtml);
}
export function drawLoomState(numWarps, numRows, rowOn, weave, loomHeight, loomWidth) {
    let c = document.getElementById("loom");
    if (c == null) {
        throw new Error('Could not find the loom element');
    }
    const canvas = c;
    const ctx = canvas.getContext("2d");
    if (ctx == null) {
        throw new Error('Could not create a context');
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const space = loomWidth / (numWarps + 1);
    let curSpace = space;
    const rowHeight = loomHeight / numRows;
    let curRowHeight = loomHeight - (rowHeight * rowOn);
    for (let i = 0; i < numWarps; i++) {
        ctx.strokeStyle = "#ff0000";
        ctx.moveTo(curSpace, 0);
        ctx.lineTo(curSpace, (curRowHeight - rowHeight));
        ctx.stroke();
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.arc(curSpace, curRowHeight - (rowHeight / 2), (rowHeight / 2), 0, 2 * Math.PI);
        ctx.stroke();
        let weaveRowHeight = curRowHeight + rowHeight;
        if (weave.weave.length > 0) {
            debugger;
            for (let j = 0; j < weave.weave.length; j++) {
                const strokeColor = weave.weave[j].colors[i];
                ctx.strokeStyle = baseGameInfo.possibleColors[strokeColor];
                ctx.fillRect(curSpace - (space / 2), weaveRowHeight, space, rowHeight);
                weaveRowHeight += rowHeight;
            }
        }
        curSpace += space;
    }
}
export function drawOwnedTextiles(textiles) {
    let textileText = "<ul>";
    for (const textile of textiles) {
        textileText += "${textile.name}";
    }
    textileText += "</ul>";
    $("#ownedTextiles").html(textileText);
}
