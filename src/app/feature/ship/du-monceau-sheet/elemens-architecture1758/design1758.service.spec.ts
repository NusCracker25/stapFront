import { TestBed } from '@angular/core/testing';

import { Design1758Service } from './design1758.service';

describe('Design1758Service', () => {
  let service: Design1758Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Design1758Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
