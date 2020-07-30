import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderStexComponent } from './new-order-stex.component';

describe('NewOrderStexComponent', () => {
  let component: NewOrderStexComponent;
  let fixture: ComponentFixture<NewOrderStexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOrderStexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderStexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
