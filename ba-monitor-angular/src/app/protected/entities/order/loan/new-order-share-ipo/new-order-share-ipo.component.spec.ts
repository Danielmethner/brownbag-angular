import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderShareIpoComponent } from './new-order-share-ipo.component';

describe('NewOrderShareIpoComponent', () => {
  let component: NewOrderShareIpoComponent;
  let fixture: ComponentFixture<NewOrderShareIpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOrderShareIpoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderShareIpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
