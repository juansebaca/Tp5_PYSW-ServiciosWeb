import { TestBed } from '@angular/core/testing';

import { CarSpecs } from './car-specs';

describe('CarSpecs', () => {
  let service: CarSpecs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarSpecs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
