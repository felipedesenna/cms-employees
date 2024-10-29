import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Employee } from '../employees';

declare const $: any

@Component({
  selector: 'employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  formEditEmployee!: FormGroup;

  @Input()
  employee!: Employee;

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private element: ElementRef) {}

  ngOnInit() {
    if (this.employee) {
      this.formEditEmployee = new FormGroup({
        name: new FormControl(this.employee.name),
        salary: new FormControl(this.employee.salary),
        bonus: new FormControl(this.employee.bonus),
      });
    }
  }

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
