import { TestBed } from '@angular/core/testing';

import { ObjUserService } from './obj-user.service';

describe('ObjUserService', () => {
  let service: ObjUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
