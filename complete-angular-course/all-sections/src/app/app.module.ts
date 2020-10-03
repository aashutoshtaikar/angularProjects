import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { S6DirectivesModule } from './s6-directives/s6-directives.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { S5ReusableComponentsModule } from './s5-reusable-components/s5-reusable-components.module';
import { S7TemplateDrivenFormsModule } from './s7-template-driven-forms/s7-template-driven-forms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    S5ReusableComponentsModule,
    S6DirectivesModule,
    S7TemplateDrivenFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
