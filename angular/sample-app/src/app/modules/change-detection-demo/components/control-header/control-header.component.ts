import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../change-detection-demo.component';
import { EmployeeService } from '../../services/employee/employee.service';

@Component({
  selector: 'cdd-control-header',
  templateUrl: './control-header.component.html',
  styleUrls: ['./control-header.component.css']
})
export class ControlHeaderComponent implements OnInit {
  
  @Input() employee: Employee;
  @Input() employees: Employee[];
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  onSave(){
    this.employeeService.createEmployee(this.employee).subscribe(emp=>{
      console.log(emp, ...this.employees);
      this.employeeService.getEmployees().subscribe((employees:Employee[])=>{this.employees = employees});
      // this.employees.splice(0, this.employees.length);
      // this.employeeService.getEmployees().subscribe((employees:Employee[])=>{this.employees.push(...employees)});
    });
  }

  onCancel(){
    
  }

  onTest(){
    this.employees.push(this.employee);
  }

}
