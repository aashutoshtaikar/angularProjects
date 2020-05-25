import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { S6DirectivesComponent } from './s6-directives.component';



@NgModule({
  declarations: [S6DirectivesComponent],
  imports: [
    CommonModule
  ],
  exports: [S6DirectivesComponent]
})
export class S6DirectivesModule { }
