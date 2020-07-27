import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderBondIpoComponent } from './new-order-bond-ipo.component';

describe('NewOrderBondIpoComponent', () => {
  let component: NewOrderBondIpoComponent;
  let fixture: ComponentFixture<NewOrderBondIpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOrderBondIpoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderBondIpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
