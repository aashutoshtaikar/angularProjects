import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { S7TemplateDrivenFormsComponent } from './s7-template-driven-forms.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { Assignment1Component } from './components/assignment1/assignment1.component';


@NgModule({
  declarations: [S7TemplateDrivenFormsComponent, ContactFormComponent, Assignment1Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    S7TemplateDrivenFormsComponent
  ]
})
export class S7TemplateDrivenFormsModule { }
