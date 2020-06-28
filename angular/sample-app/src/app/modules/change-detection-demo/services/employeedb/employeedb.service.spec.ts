import { TestBed } from '@angular/core/testing';

import { EmployeedbService } from './employeedb.service';

describe('EmployeedbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeedbService = TestBed.get(EmployeedbService);
    expect(service).toBeTruthy();
  });
});
