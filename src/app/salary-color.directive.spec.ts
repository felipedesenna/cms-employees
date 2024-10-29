import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SalaryColorDirective } from './salary-color.directive';

/* describe('SalaryColorDirective', () => {
  let fixture: ComponentFixture<SalaryColorDirective>;
  let allSalaryColor: DebugElement[];
  let bareTd: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [SalaryColorDirective]
    }).createComponent(SalaryColorDirective);

    fixture.detectChanges();

    allSalaryColor = fixture.debugElement.queryAll(By.directive(SalaryColorDirective));
    bareTd = fixture.debugElement.query(By.css('td:not([salaryColor])'));
  })

  it('should have one salaryColor elements', () => {
    expect(allSalaryColor.length).toBe(1);
  });

  it('bare <td> should not have a customProperty', () => {
    expect(bareTd.properties['customProperty']).toBeUndefined();
  });
}); */
