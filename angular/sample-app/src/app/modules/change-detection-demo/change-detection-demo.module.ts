import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlHeaderComponent } from './components/control-header/control-header.component';
import { ChangeDetectionDemoComponent } from './change-detection-demo.component';
import { ChangeDetectionDemoRoutingModule } from './change-detection-demo-routing.module';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './components/employee-list/employee-list.component'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmployeedbService } from './services/employeedb/employeedb.service';

@NgModule({
  declarations: [ControlHeaderComponent, ChangeDetectionDemoComponent, EmployeeListComponent],
  imports: [
    CommonModule,
    ChangeDetectionDemoRoutingModule,
    FormsModule
  ]
})
export class ChangeDetectionDemoModule { }
