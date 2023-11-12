import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

import { Employee } from '../employees';
import { EmployeeService } from '../employee.service';

declare const $: any

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.scss']
})
export class EmployeeNewComponent implements OnInit {
  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0,
  }

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private element: ElementRef, private employeeService: EmployeeService) {}

  ngOnInit() {}

  addEmployee() {
    const newEmployee = Object.assign({}, this.employee)
    this.employeeService.addEmployee(newEmployee)
    this.onSubmit.emit(newEmployee)
    this.hide()
  }

  hide() {
    const modal = this.getDivModal()
    $(modal).modal('hide')
  }

  show() {
    const modal = this.getDivModal()
    $(modal).modal('show')
  }

  private getDivModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement
    return nativeElement.firstChild?.firstChild as HTMLElement
  }
}
