import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

import { Employee } from '../employees';
import { EmployeeService } from '../employee.service';

declare const $: any

@Component({
  selector: 'employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.scss']
})
export class EmployeeDeleteComponent {
  @Input()
  employee!: Employee;

  @Output()
  onDestroy: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private employeeService: EmployeeService, private element: ElementRef) {}

  destroy() {
    const deleteEmployee = Object.assign({}, this.employee)
    this.employeeService.destroyEmployee(this.employee)
    this.onDestroy.emit(deleteEmployee)
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
    return nativeElement.firstChild as HTMLElement
  }
}
