import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickgridWrapperComponent } from './slickgrid-wrapper/slickgrid-wrapper.component';
import { AngularSlickgridModule } from 'angular-slickgrid';


@NgModule({
  declarations: [SlickgridWrapperComponent],
  imports: [
    CommonModule,
    AngularSlickgridModule.forRoot()
  ],
  exports: [
    SlickgridWrapperComponent
  ]
})
export class SharedModule { }
