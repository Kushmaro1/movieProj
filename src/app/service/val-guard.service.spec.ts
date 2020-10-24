import { TestBed } from '@angular/core/testing';

import { ValGuardService } from './val-guard.service';

describe('ValGuardService', () => {
  let service: ValGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
