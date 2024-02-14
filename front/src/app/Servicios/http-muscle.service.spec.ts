import { TestBed } from '@angular/core/testing';

import { HttpMuscleService } from './http-muscle.service';

describe('HttpMuscleService', () => {
  let service: HttpMuscleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpMuscleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
