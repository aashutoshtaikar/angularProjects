import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { S6DirectivesModule } from './s6-directives/s6-directives.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { S5ReusableComponentsModule } from './s5-reusable-components/s5-reusable-components.module';
import { S7TemplateDrivenFormsModule } from './s7-template-driven-forms/s7-template-driven-forms.module';
import { S9ConsumingHttpServicesModule } from './s9-consuming-http-services/s9-consuming-http-services.module';
import { HttpClientModule } from '@angular/common/http';
import { AppErrorHandler } from './common/app-error-handler';

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
    S9ConsumingHttpServicesModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
