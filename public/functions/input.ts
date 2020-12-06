import { LoomCanvasInputs, LoomState, WarpConfig } from "../model/types";
import { disableWarpInputCanvasListener, enableWarpInputCanvasListener } from "./canvas";

export function inputLoomRow(loomState: LoomState, loomCanvasInputs: LoomCanvasInputs): Promise<Array<WarpConfig>> {
  const listener = enableWarpInputCanvasListener(loomState, loomCanvasInputs);
  
  return new Promise((resolve, reject) => {
    setKeyListeners(() => {
      resolve(clone(loomState.warpState));
      disableWarpInputCanvasListener(listener);
    });
  });
}

function clone<T>(thing: T): T {
  return JSON.parse(JSON.stringify(thing))
}

export function setKeyListeners(fn: (...params: Array<any>) => void): void {
  window.addEventListener('keydown', (ev: KeyboardEvent, ) => {
    switch (ev.key) {
      case 'Enter':
        fn();
        return;
    }
  });
}
