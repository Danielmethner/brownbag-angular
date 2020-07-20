import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerBaseComponent } from './broker-base.component';

describe('BrokerBaseComponent', () => {
  let component: BrokerBaseComponent;
  let fixture: ComponentFixture<BrokerBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
