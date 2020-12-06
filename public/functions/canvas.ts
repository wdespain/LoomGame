import { LoomCanvasInputs, LoomState, Point, WarpPosition } from "../model/types.js";
import * as geometry from "./geometry.js";

type OnclickEventHandler = (this: GlobalEventHandlers, ev: MouseEvent) => any;

/**
 * Get the canvas and context for the game. Throws if the canvas is not found.
 */
export function getCanvasAndContext(): {
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
} {
  const canvas = document.querySelector('canvas#loom') as (HTMLCanvasElement | null)
  if (canvas == null) {
    throw new Error('Could not find the canvas loom element');
  }

  const context = canvas.getContext('2d') as (CanvasRenderingContext2D | undefined);
  if (context == null) {
    throw new Error('Could not create a 2d context');
  }

  return {
    canvas,
    context,
  };
}

/**
 * Click events contain values for clientX and clientY.
 * 
 * This function adjusts those values normalized values within within the canvas
 * so that the top-left point is (0, 0) and the bottom-right point is (canvas.width, canvas.height).
 */
function normalizeClickCoordinates(canvas: HTMLCanvasElement, x: number, y: number): Point {
  const b = canvas.getBoundingClientRect();
  return {
    x: x - b.x,
    y: y - b.y,
  };
}

function toggleWarpPosition(position: WarpPosition): WarpPosition {
  switch (position) {
    case WarpPosition.Under:
      return WarpPosition.Over;
    case WarpPosition.Over:
      return WarpPosition.Under;
    default:
      throw new Error('Encountered unexpected position');  
  }
}

export function enableWarpInputCanvasListener(
  loomState: LoomState,
  loomCanvasInputs: LoomCanvasInputs,
): OnclickEventHandler {
  const { canvas } = getCanvasAndContext();

  const onclick = (ev: MouseEvent) => {
    const point = normalizeClickCoordinates(canvas, ev.clientX, ev.clientY);

    const circles = geometry.circlesThatContainPoint(point, loomCanvasInputs.warpInputCircles);
    if (circles.length === 0) {
      return;
    }
    const warp = circles[0];

    if (loomState.warpState.length < warp.warpIndex) {
      throw new Error('Warp index is out of bounds');
    }

    loomState.warpState[warp.warpIndex].position = toggleWarpPosition(loomState.warpState[warp.warpIndex].position);
    loomCanvasInputs.redraw();
  };

  canvas.addEventListener('click', onclick);
  return onclick;
}

export function disableWarpInputCanvasListener(onclick: OnclickEventHandler): void {
  const { canvas } = getCanvasAndContext();
  canvas.removeEventListener('click', onclick);
}
