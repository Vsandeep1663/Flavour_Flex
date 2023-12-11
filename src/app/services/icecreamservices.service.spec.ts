import { TestBed } from '@angular/core/testing';

import { IcecreamservicesService } from './icecreamservices.service';

describe('IcecreamservicesService', () => {
  let service: IcecreamservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcecreamservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
