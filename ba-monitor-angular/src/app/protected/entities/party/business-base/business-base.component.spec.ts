import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBaseComponent } from './business-base.component';

describe('BusinessBaseComponent', () => {
  let component: BusinessBaseComponent;
  let fixture: ComponentFixture<BusinessBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
