import { Component, ViewChild } from '@angular/core';

import { EmployeeNewComponent } from '../employee-new/employee-new.component';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';
import { EmployeeDeleteComponent } from '../employee-delete/employee-delete.component';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employees';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  employee!: Employee;
  employeeToEdit!: Employee;
  employeeToDelete!: Employee;
  showMessageSuccess = false;
  data = new Date();

  @ViewChild(EmployeeNewComponent)
  employeeNewModal!: EmployeeNewComponent

  @ViewChild(EmployeeEditComponent)
  employeeEditModal!: EmployeeEditComponent

  @ViewChild(EmployeeDeleteComponent)
  employeeDeleteModal!: EmployeeDeleteComponent

  constructor(public employeeService: EmployeeService) {}

  openNewModal() {
    this.employeeNewModal.show()
  }

  openEditModal(employee: Employee) {
    this.employeeToEdit = employee
    this.employeeEditModal.show()
  }

  openDestroyModal(employee: Employee) {
    this.employeeToDelete = employee
    this.employeeDeleteModal.show()
  }

  onNewEmployee(employee: Employee) {
    this.employee = employee;
    this.showMessageSuccess = true;
  }

  onEditEmployee(employee: Employee) {
    console.log(employee);
  }

  onDestroyEmployee(employee: Employee) {
    console.log(employee);
  }
}
