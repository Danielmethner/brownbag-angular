import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonBaseComponent } from './person-base.component';

describe('PersonBaseComponent', () => {
  let component: PersonBaseComponent;
  let fixture: ComponentFixture<PersonBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
