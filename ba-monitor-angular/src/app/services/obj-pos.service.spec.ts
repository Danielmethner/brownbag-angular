import { TestBed } from '@angular/core/testing';

import { ObjPosService } from './obj-pos.service';

describe('ObjPosService', () => {
  let service: ObjPosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjPosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
