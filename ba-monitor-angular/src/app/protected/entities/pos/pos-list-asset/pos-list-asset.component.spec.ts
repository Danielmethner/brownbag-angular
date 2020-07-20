import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosListAssetComponent } from './pos-list-asset.component';

describe('PosListAssetComponent', () => {
  let component: PosListAssetComponent;
  let fixture: ComponentFixture<PosListAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosListAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosListAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
