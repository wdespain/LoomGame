export interface PossibleColors {
  [color: string]: string,
  "black" : "#000000",
  "red" : "#ff3333",
  "blue" : "#0059b3"
}

interface BaseGameInfo {
  possibleColors: PossibleColors;
}

export const baseGameInfo: BaseGameInfo = {
	"possibleColors" : {
		"black" : "#000000",
		"red" : "#ff3333",
		"blue" : "#0059b3"
	}
}