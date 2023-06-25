import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-simbolos-lexico',
  templateUrl: './tabela-simbolos-lexico.component.html',
  styleUrls: ['./tabela-simbolos-lexico.component.scss']
})
export class TabelaSimbolosLexicoComponent {
  @Input() tableOfSymbols: [string, any][] | undefined;
  public columnsToDisplay = ['variableName', 'occurrences', 'variableType'];
}
