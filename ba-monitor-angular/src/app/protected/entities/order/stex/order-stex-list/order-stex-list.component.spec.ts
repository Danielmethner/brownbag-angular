import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStexListComponent } from './order-stex-list.component';

describe('OrderStexListComponent', () => {
  let component: OrderStexListComponent;
  let fixture: ComponentFixture<OrderStexListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderStexListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
