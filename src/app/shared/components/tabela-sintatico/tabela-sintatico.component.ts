import { Component, Input } from '@angular/core';
import { ParserData } from '../../interfaces/sintatico.interface';


@Component({
  selector: 'app-tabela-simbolos-sintatico',
  templateUrl: './tabela-sintatico.component.html',
  styleUrls: ['./tabela-sintatico.component.scss']
})
export class TabelaSintaticoComponent {
  @Input() parserData: ParserData[] | undefined;
  public displayedColumns: string[] = ['steps', 'tokenSteps'];

  public highlightUnknown(str: string): string {
    const regex = /desconhecido/gi;
    const span = "<span class='red'>DESCONHECIDO</span>";
    return str.replace(regex, span);
  }
}
