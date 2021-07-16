import { TestBed } from '@angular/core/testing';

import { DiffmoduleService } from './diffmodule.service';

describe('DiffmoduleService', () => {
  let service: DiffmoduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiffmoduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
