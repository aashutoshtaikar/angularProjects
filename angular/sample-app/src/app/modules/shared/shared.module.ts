import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickgridWrapperComponent } from './components/slickgrid-wrapper/slickgrid-wrapper.component';
import { AngularSlickgridModule } from 'angular-slickgrid';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import * as Material from '@angular/material';

@NgModule({
  declarations: [SlickgridWrapperComponent, ErrorDialogComponent],
  imports: [
    CommonModule,
    AngularSlickgridModule.forRoot(),
    Material.MatDialogModule
  ],
  exports: [
    SlickgridWrapperComponent
  ],
  entryComponents: [ErrorDialogComponent]
})
export class SharedModule { }
