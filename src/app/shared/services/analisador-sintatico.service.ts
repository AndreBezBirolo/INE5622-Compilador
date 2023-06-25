import { Injectable } from '@angular/core';
import { ANALISADOR_SINTATICO_TABELA } from '../utils/utils.constant';

type TokenResult = {
  token: string;
  match: string | undefined;
};

@Injectable({
  providedIn: 'root'
})
export class AnalisadorSintaticoService {

  public parser(lexerResult: TokenResult[]): { steps: string; tokenSteps: string }[] {
    const steps = ["PROGRAM"];
    const tokens = lexerResult.map(({ token }) => token);
    let validTokenCounter = 0;
    tokens.push("$");
    const tokenSteps = [tokens.join(" ")];
    let error = false
    const result: { steps: string; tokenSteps: string }[] = [{ steps: "PROGRAM", tokenSteps: tokens.join(" ") }];

    while (steps[ steps.length - 1 ] !== "" && !error) {
      const currentStep = steps[ steps.length - 1 ].split(" ");
      const firstSymbol = currentStep[ 0 ];
      const firstToken = tokens[ 0 ];
      if (!firstSymbol) {
        const nextStep = currentStep.join(" ").trim();
        steps.push(nextStep);
        continue;
      }
      if (firstSymbol === firstToken) {
        validTokenCounter++;
        currentStep.shift();
        tokens.shift();
        steps.push(currentStep.join(" "));
        tokenSteps.push(tokens.join(" "));
        result.push({ steps: currentStep.join(" "), tokenSteps: tokens.join(" ") });
        continue;
      }
      // @ts-ignore
      if (ANALISADOR_SINTATICO_TABELA[ firstSymbol as keyof typeof ANALISADOR_SINTATICO_TABELA ] !== undefined && ANALISADOR_SINTATICO_TABELA[ firstSymbol as keyof typeof ANALISADOR_SINTATICO_TABELA ][ firstToken ] !== undefined) {
        currentStep.shift();
        // @ts-ignore
        const nextStep = [ANALISADOR_SINTATICO_TABELA[ firstSymbol as keyof typeof ANALISADOR_SINTATICO_TABELA ][ firstToken ], currentStep.join(" ")].join(" ").trim();
        steps.push(nextStep)
        tokenSteps.push(tokens.join(" "));
        result.push({ steps: nextStep, tokenSteps: tokens.join(" ") });
        // @ts-ignore
        currentStep[ 0 ] = ANALISADOR_SINTATICO_TABELA[ firstSymbol as keyof typeof ANALISADOR_SINTATICO_TABELA ][ firstToken ]
      } else {
        error = true;
      }
    }
    return result;
  }
}
