import { TestBed } from '@angular/core/testing';

import { LocaldrinksService } from './localdrinks.service';

describe('LocaldrinksService', () => {
  let service: LocaldrinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocaldrinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
