import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Employee } from '../employees';
import { EmployeeService } from '../employee.service';

declare const $: any

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.scss']
})
export class EmployeeNewComponent implements OnInit {
  formEmployee!: FormGroup;
  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0,
  }

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(
    private formBuilder: FormBuilder,
    private element: ElementRef,
    private employeeService: EmployeeService,
  ) {}

  ngOnInit() {
    this.formEmployee = this.formBuilder.group({
      name: [this.employee.name, Validators.required],
      salary: [this.employee.salary, [Validators.required, Validators.min(1), Validators.max(10000)]],
      bonus: [this.employee.bonus, Validators.required]
    })
  }

  addEmployee() {
    const newEmployee = Object.assign(this.employee, this.formEmployee.value)

    if (this.formEmployee.valid) {
      this.employeeService.addEmployee(newEmployee)
      this.onSubmit.emit(newEmployee)
      this.formEmployee.reset()
      this.hide()
    } else {
      Object.keys(this.formEmployee.controls).forEach(field => {
        const control = this.formEmployee.get(field)
        control?.markAsDirty()
      })
    }
  }

  hide() {
    const modal = this.getDivModal()
    this.formEmployee.reset()
    $(modal).modal('hide')
  }

  show() {
    const modal = this.getDivModal()
    $(modal).modal('show')
  }

  verifyValidTouched(field: string) {
    return !this.formEmployee.controls[field].valid &&
      (this.formEmployee.controls[field].touched || this.formEmployee.controls[field].dirty)
  }

  applyErrorCss(field: string) {
    return {
      'has-error': this.verifyValidTouched(field),
      'has-feedback': this.verifyValidTouched(field)
    }
  }

  private getDivModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement
    return nativeElement.firstChild?.firstChild as HTMLElement
  }
}
