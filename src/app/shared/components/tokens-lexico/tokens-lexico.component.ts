import { Component, Input, OnChanges } from '@angular/core';
import { UtilsService } from '../../utils/utils.service';
import { TokenResult } from '../../interfaces/lexico.interface';


@Component({
  selector: 'app-tokens-lexico',
  templateUrl: './tokens-lexico.component.html',
  styleUrls: ['./tokens-lexico.component.scss']
})
export class TokensLexicoComponent implements OnChanges {

  @Input() lexerResult: TokenResult[] = [];
  public lexerResultLines: TokenResult[][] = [];
  public result: string | undefined;

  ngOnChanges() {
    if (this.lexerResult) {
      const indexesOfPontoEVirgula = UtilsService.getAllIndexes(this.lexerResult.map(({ token }) => token), ';');
      const indexesOfAbreChave = UtilsService.getAllIndexes(this.lexerResult.map(({ token }) => token), '{');
      const indexesOfFechaChave = UtilsService.getAllIndexes(this.lexerResult.map(({ token }) => token), '}');
      const allIndexes = [...indexesOfPontoEVirgula, ...indexesOfAbreChave, ...indexesOfFechaChave].sort(
        (v1, v2) => v1 - v2
      );
      this.lexerResultLines = UtilsService.splitArrayOnIndexes(this.lexerResult, allIndexes);
      this.result = this.lexerResultLines
        .map(line => line.map(item => item.token).join(' '))
        .join('\n');
    }
  }

}
