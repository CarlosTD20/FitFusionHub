import { TestBed } from '@angular/core/testing';

import { HttpExerciseService } from './http-exercise.service';

describe('HttpExerciseService', () => {
  let service: HttpExerciseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpExerciseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
