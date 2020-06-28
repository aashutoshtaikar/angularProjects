import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonComponent } from './components/common/common.component';
import { SharedModule } from './modules/shared/shared.module';
import { ExamplesModule } from './modules/examples/examples.module';
import { ChangeDetectionDemoComponent } from './modules/change-detection-demo/change-detection-demo.component';
import { ChangeDetectionDemoModule } from './modules/change-detection-demo/change-detection-demo.module';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmployeedbService } from './modules/change-detection-demo/services/employeedb/employeedb.service';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ExamplesModule,
    BrowserAnimationsModule,
    ChangeDetectionDemoModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(EmployeedbService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
