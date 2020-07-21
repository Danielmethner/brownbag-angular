import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosListLiabComponent } from './pos-list-liab.component';

describe('PosListLiabComponent', () => {
  let component: PosListLiabComponent;
  let fixture: ComponentFixture<PosListLiabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosListLiabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosListLiabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
