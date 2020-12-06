import { Pattern } from "../model/types";

export function randomPattern(numRows: number, numCols: number, colors: Array<string>): Pattern {
  const rows: Array<Array<string>> = [];

  for (let i = 0; i < numRows; i++) {
    rows.push([]);
    for (let j = 0; j < numCols; j++) {
      rows[i].push(randomIndex(colors));
    }
  }

  return {
    name: 'do this',
    rows,
  };
}

function randomIndex<T>(array: Array<T>): T {
  return array[Math.floor(Math.random() * array.length)];
}
