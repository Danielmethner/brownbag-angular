import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStexListPublicComponent } from './order-stex-list-public.component';

describe('OrderStexListPublicComponent', () => {
  let component: OrderStexListPublicComponent;
  let fixture: ComponentFixture<OrderStexListPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderStexListPublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStexListPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
