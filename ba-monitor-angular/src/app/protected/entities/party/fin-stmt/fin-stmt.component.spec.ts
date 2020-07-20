import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinStmtComponent } from './fin-stmt.component';

describe('FinStmtComponent', () => {
  let component: FinStmtComponent;
  let fixture: ComponentFixture<FinStmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinStmtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinStmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
