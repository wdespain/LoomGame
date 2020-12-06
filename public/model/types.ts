import { Textile } from "../classes/textile";

export type Color = string;

export const enum WarpPosition {
  Under = 0,
  Over = 1,
}

export interface WarpConfig {
  position: WarpPosition,
  weftColor: Color,
}

export interface TextileState {
  name: string;
  warpNum: number;
  weaveRows: Array<Array<WarpConfig>>
}

export interface LoomState {
  numWarps: number,
  numRows: number,
  loomHeight: number,
  loomWidth: number,
  textile: TextileState,
  warpState: Array<WarpConfig>,
}

// Base geometry
export interface Point { x: number, y: number };
export interface Circle { center: Point, radius: number };

// Canvas inputs
export interface WarpInputCircle extends Circle {
  warpIndex: number,
}

export interface LoomCanvasInputs {
  /** redraw the game to update inputs */
  redraw: () => void;
  warpInputCircles: Array<WarpInputCircle>,
}
