import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { PercentDirective } from './directives/percent/percent.directive';
import { CurrencyDirective } from './directives/currency/currency.directive';
import { CurrencyPipe } from './pipes/currency/currency.pipe';
import { MydecimalPipe } from './pipes/mydecimal/mydecimal.pipe';
import { NumericDirective } from './directives/numeric/numeric.directive';



@NgModule({
  declarations: [HighlightDirective, PercentDirective, CurrencyDirective, CurrencyPipe, MydecimalPipe, NumericDirective],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirective, PercentDirective, CurrencyDirective, MydecimalPipe, NumericDirective],
  providers:[DecimalPipe, CurrencyPipe, MydecimalPipe]
})
export class SharedModule { }
