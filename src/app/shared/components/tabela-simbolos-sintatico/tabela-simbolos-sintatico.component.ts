import { Component, Input } from '@angular/core';
import { ParserData } from '../../interfaces/sintatico.interface';


@Component({
  selector: 'app-tabela-simbolos-sintatico',
  templateUrl: './tabela-simbolos-sintatico.component.html',
  styleUrls: ['./tabela-simbolos-sintatico.component.scss']
})
export class TabelaSimbolosSintaticoComponent {
  @Input() parserData: ParserData[] | undefined;
  public displayedColumns: string[] = ['steps', 'tokenSteps'];
}
