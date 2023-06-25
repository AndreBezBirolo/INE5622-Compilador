import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnalisadorLexicoService } from './shared/services/analisador-lexico.service';
import { AnalisadorSintaticoService } from './shared/services/analisador-sintatico.service';
import { ParserData } from './shared/interfaces/sintatico.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public form: FormGroup;
  public lexerResult: { result: any; tableOfSymbols: Map<string, any> } | undefined;
  public lexerTable: [string, any][] | undefined;
  public parserResult: ParserData[] | undefined;
  public pageTitle: string = 'Analisador';

  constructor(private analisadorLexicoService: AnalisadorLexicoService,
              private analisadorSintaticoService: AnalisadorSintaticoService) {
    this.form = new FormGroup({
      input: new FormControl('', [Validators.required]),
    });
  }

  get input(): AbstractControl | null {
    return this.form.get('input');
  }

  public onSubmitClick(): void {
    if (this.input?.valid) {
      this.input?.disable();
      this.lexerResult = this.analisadorLexicoService.lexicon(this.input.value);
      this.lexerTable = Array.from(this.lexerResult.tableOfSymbols.entries());
      this.parserResult = this.analisadorSintaticoService.parser(this.lexerResult.result);
      this.pageTitle = 'Resposta do Analisador';
    }
  }

  public onClearClick(): void {
    this.input?.enable();
    this.reset();
  }

  private reset(): void {
    this.pageTitle = 'Analiador';
    this.form.reset();
    this.lexerResult = undefined;
    this.lexerTable = undefined;
    this.parserResult = undefined;
  }
}
