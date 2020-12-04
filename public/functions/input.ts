import { LoomCanvasInputs, LoomState, WarpConfig } from "../model/types";
import { disableWarpInputCanvasListener, enableWarpInputCanvasListener } from "./canvas";

export function inputLoomRow(loomState: LoomState, loomCanvasInputs: LoomCanvasInputs): Promise<Array<WarpConfig>> {
  const listener = enableWarpInputCanvasListener(loomState, loomCanvasInputs);
  
  return new Promise((resolve, reject) => {
    $("#next").on("click", function() {
      // Do we need to also remove the #next.on(click) event listener to avoid a memory leak?
      disableWarpInputCanvasListener(listener);
      resolve(clone(loomState.warpState));
    });
  });
}

function clone<T>(thing: T): T {
  return JSON.parse(JSON.stringify(thing))
}
