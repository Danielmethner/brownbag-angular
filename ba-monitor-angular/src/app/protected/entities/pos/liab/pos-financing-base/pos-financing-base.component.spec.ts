import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosFinancingBaseComponent } from './pos-financing-base.component';

describe('PosFinancingBaseComponent', () => {
  let component: PosFinancingBaseComponent;
  let fixture: ComponentFixture<PosFinancingBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosFinancingBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosFinancingBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
