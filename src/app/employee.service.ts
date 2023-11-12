import { Injectable } from '@angular/core';
import { Employee } from './employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [
    { name: 'Joe Doe', salary: 21000, bonus: 0 },
    { name: 'Jane Doe', salary: 10000, bonus: 0 },
    { name: 'Josh Doe', salary: 900, bonus: 5 },
  ]

  constructor() {}

  addEmployee(employee: Employee) {
    employee.bonus = employee.salary >= 1000 ? 0 : employee.bonus
    this.employees.push(employee)
  }

  destroyEmployee(employee: Employee) {
    const index = this.employees.indexOf(employee)
    this.employees.splice(index, 1)
  }
}
