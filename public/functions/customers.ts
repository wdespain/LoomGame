import { Pattern, TextileState, WarpPosition } from "../model/types";

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

function textileToPattern(textile: TextileState): Pattern {
  const rows: Array<Array<string>> = [];
  
  
  for (const row of textile.weaveRows) {
    rows.push([]);
    for (const warpConfig of row) {
      const color = warpConfig.position === WarpPosition.Over
        ? 'red'
        : warpConfig.weftColor;
      rows[rows.length - 1].push(color);
    }
  }
  
  return {
    name: 'my beautiful arrrt',
    rows,
  };
}

export function evaluateTextile(textile: TextileState, targetPattern: Pattern): number {
  const target = targetPattern.rows;
  const pattern = textileToPattern(textile).rows;

  if (pattern.length !== target.length || pattern.length === 0 || pattern[0].length !== target[0].length) {
    // customer: sorry, this textile won't fit
    return 0;
  }

  let score = 0;

  for (let i = 0; i < pattern.length; i++) {
    for (let j = 0; j < pattern[0].length; j++) {
      if (pattern[i][j] === target[i][j]) {
        score += 10;
      }
    }
  }

  return score;
}
