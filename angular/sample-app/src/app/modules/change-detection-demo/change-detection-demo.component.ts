import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee/employee.service';

export interface Employee{
  id: number;
  name: string;
}

@Component({
  selector: 'cdd-change-detection-demo',
  templateUrl: './change-detection-demo.component.html',
  styleUrls: ['./change-detection-demo.component.css']
})
export class ChangeDetectionDemoComponent implements OnInit {
  employee = {name:''};
  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    console.log('getting employee data:');
    this.employeeService.getEmployees().subscribe((employees)=>{
      console.log('employee data:',employees);
      this.employees = <Employee[]>employees;
      console.log('this.employees:',this.employees);
    });

  }
}
