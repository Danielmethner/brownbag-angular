import { TestBed } from '@angular/core/testing';

import { ObjAssetService } from './obj-asset.service';

describe('ObjAssetService', () => {
  let service: ObjAssetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjAssetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
