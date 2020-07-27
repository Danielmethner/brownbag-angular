import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderLoanComponent } from './new-order-loan.component';

describe('NewOrderLoanComponent', () => {
  let component: NewOrderLoanComponent;
  let fixture: ComponentFixture<NewOrderLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOrderLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
