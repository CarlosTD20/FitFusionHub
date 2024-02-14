import { TestBed } from '@angular/core/testing';

import { HttpRoutineService } from './http-routine.service';

describe('HttpRoutineService', () => {
  let service: HttpRoutineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRoutineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
