export const enum WarpConfig {
  Up = 1,
  Down = 0,
}

/**
 * Row info includes the information needed to render a row of a textile.
 * The arrrays weave and color should be the same length.
 */
export interface RowInfo {
  weave: Array<WarpConfig>;
  colors: Array<string>;
}
