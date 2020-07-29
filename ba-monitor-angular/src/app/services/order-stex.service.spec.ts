import { TestBed } from '@angular/core/testing';

import { OrderStexService } from './order-stex.service';

describe('OrderStexService', () => {
  let service: OrderStexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderStexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
