import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../change-detection-demo.component';

/**
 * @see https://www.techiediaries.com/angular-inmemory-web-api/
 */
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  SERVER_URL: string = "app/";
  constructor(private httpClient: HttpClient) { }

  public getEmployees() {
    return this.httpClient.get(this.SERVER_URL + 'employees');
  }

  public getEmployee(employeeId) {
    return this.httpClient.get(`${this.SERVER_URL + 'employees'}/${employeeId}`);
  }
  public createEmployee(employee: Employee) {
    return this.httpClient.post(`${this.SERVER_URL + 'employees'}`, employee)
  }

  public deleteEmployee(employeeId) {
    return this.httpClient.delete(`${this.SERVER_URL + 'employees'}/${employeeId}`)
  }
  public updateEmployee(employee: Employee) {
    return this.httpClient.put(`${this.SERVER_URL + 'employees'}/${employee.id}`, employee)
  }
}
