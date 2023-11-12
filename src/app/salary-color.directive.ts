import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[salaryColor]'
})
export class SalaryColorDirective {
  constructor(private element: ElementRef) {}

  @Input()
  set salaryColor(value: number) {
    const nativeElement: HTMLElement = this.element.nativeElement
    const salary = value

    nativeElement.style.color = salary > 20000 ? 'green' : 'red'
  }
}
