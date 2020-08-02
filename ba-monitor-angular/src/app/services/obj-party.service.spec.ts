import { TestBed } from '@angular/core/testing';

import { ObjPartyService } from './obj-party.service';

describe('ObjPartyService', () => {
  let service: ObjPartyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjPartyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
