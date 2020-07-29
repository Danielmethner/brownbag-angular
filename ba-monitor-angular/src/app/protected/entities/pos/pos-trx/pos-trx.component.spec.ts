import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosTrxComponent } from './pos-trx.component';

describe('PosTrxComponent', () => {
  let component: PosTrxComponent;
  let fixture: ComponentFixture<PosTrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosTrxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosTrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
