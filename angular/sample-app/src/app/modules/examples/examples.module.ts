import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsExampleComponent } from './ngx-charts-example/ngx-charts-example.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ExamplesComponent } from './examples.component';


@NgModule({
  declarations: [NgxChartsExampleComponent, ExamplesComponent],
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  exports: [NgxChartsExampleComponent, ExamplesComponent]
})
export class ExamplesModule { }
