export interface TokenResult {
  token: string;
  match: string | undefined;
}

export interface TableOfSymbols extends Map<string, {
  numberOfOccurrences: number;
  varType: string;
}> {
}
