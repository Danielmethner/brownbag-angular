import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosFinancingComponent } from './pos-financing.component';

describe('PosFinancingComponent', () => {
  let component: PosFinancingComponent;
  let fixture: ComponentFixture<PosFinancingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosFinancingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosFinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
