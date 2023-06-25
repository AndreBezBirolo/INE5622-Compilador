import { Injectable } from '@angular/core';
import { ANALISADOR_LEXICO_TOKENS } from '../utils/utils.constant';
import { TableOfSymbols, TokenResult } from '../interfaces/lexico.interface';


@Injectable({
  providedIn: 'root'
})
export class AnalisadorLexicoService {

  constructor() {
  }

  public lexicon(code: string): { result: TokenResult[]; tableOfSymbols: TableOfSymbols } {
    let textResult = code;
    const symbolsTable = new Map<string, any>();
    const matchesByToken: { [ key: string ]: string[] } = { "ident": [], "DESCONHECIDO": [] };

    for (const { name, regex } of ANALISADOR_LEXICO_TOKENS) {
      if (name === "ident") {
        continue;
      }

      matchesByToken[ name ] = [...textResult.matchAll(regex)].map(([v]) => v);
      textResult = textResult.split(regex).join(` ${name} `);
    }

    const lexerTokensNames = ANALISADOR_LEXICO_TOKENS.map(({ name }) => name);
    const arrayOfTokens = textResult.split(/\s+/).filter((value) => !!value);

    const arrayOfTokensWithIDAndUnknown = arrayOfTokens.map((token, index) => {
      if (lexerTokensNames.includes(token)) {
        return token;
      }

      const identRegex = ANALISADOR_LEXICO_TOKENS.find(({ name }) => name === "ident")?.regex as RegExp;
      if (token.match(identRegex)?.length === 1) {
        matchesByToken[ "ident" ] = [...matchesByToken[ "ident" ], token];

        const previousToken = arrayOfTokens[ index - 1 ];
        const varType = ["int", "float", "string"].includes(previousToken)
          ? previousToken
          : previousToken === "def"
            ? "function"
            : "UNDEFINED";

        if (symbolsTable.has(token)) {
          symbolsTable.get(token).numberOfOccurrences += 1;
        } else {
          symbolsTable.set(token, {
            numberOfOccurrences: 1,
            varType: varType
          });
        }

        return "ident";
      }

      matchesByToken[ "DESCONHECIDO" ] = [...matchesByToken[ "DESCONHECIDO" ], token];
      return "DESCONHECIDO";
    });

    const result = arrayOfTokensWithIDAndUnknown.map((token) => {
      return { token, match: matchesByToken[ token ].shift() };
    });

    return { result, tableOfSymbols: symbolsTable };
  }
}
