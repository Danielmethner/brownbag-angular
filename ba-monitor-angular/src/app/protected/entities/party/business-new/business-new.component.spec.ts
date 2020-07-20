import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessNewComponent } from './business-new.component';

describe('BusinessNewComponent', () => {
  let component: BusinessNewComponent;
  let fixture: ComponentFixture<BusinessNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
