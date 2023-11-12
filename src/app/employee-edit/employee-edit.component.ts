import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

import { Employee } from '../employees';

declare const $: any

@Component({
  selector: 'employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent {
  @Input()
  employee!: Employee;

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private element: ElementRef) {}

  editEmployee() {
    const editEmployee = Object.assign({}, this.employee)
    this.onSubmit.emit(editEmployee)
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
