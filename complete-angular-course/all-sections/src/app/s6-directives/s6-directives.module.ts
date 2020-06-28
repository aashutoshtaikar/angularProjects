import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { S6DirectivesComponent } from './s6-directives.component';

import { InputFormatDirective } from './directives/input-format.directive';
import { NgifComponent } from './components/ngif/ngif.component';
import { NgifElseComponent } from './components/ngif-else/ngif-else.component';
import { NgifThenElseComponent } from './components/ngif-then-else/ngif-then-else.component';
import { HiddenAttrComponent } from './components/hidden-attr/hidden-attr.component';
import { NgswitchcaseComponent } from './components/ngswitchcase/ngswitchcase.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { NgforChangedetectionComponent } from './components/ngfor-changedetection/ngfor-changedetection.component';
import { NgforTrackbyComponent } from './components/ngfor-trackby/ngfor-trackby.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { SafeTraversalOperatorComponent } from './components/safe-traversal-operator/safe-traversal-operator.component';
import { InputformatDirectiveDemoComponent } from './components/inputformat-directive-demo/inputformat-directive-demo.component';



@NgModule({
  declarations: [S6DirectivesComponent, NgifComponent, NgifElseComponent, NgifThenElseComponent, HiddenAttrComponent, NgswitchcaseComponent, NgforComponent, NgforChangedetectionComponent, NgforTrackbyComponent, NgclassComponent, NgstyleComponent, SafeTraversalOperatorComponent, InputFormatDirective, InputformatDirectiveDemoComponent],
  imports: [
    CommonModule
  ],
  exports: [S6DirectivesComponent]
})
export class S6DirectivesModule { }
