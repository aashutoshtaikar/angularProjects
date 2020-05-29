import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsExampleComponent } from './ngx-charts-example/ngx-charts-example.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [NgxChartsExampleComponent],
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  exports: [NgxChartsExampleComponent]
})
export class ExamplesModule { }
