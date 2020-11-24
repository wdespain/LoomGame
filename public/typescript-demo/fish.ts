export interface Fish {
  hasScales: boolean,
  size: number,
  name: string,
}

export function woopah(name: string): void {
  console.log(name, 'whoopa');
}
