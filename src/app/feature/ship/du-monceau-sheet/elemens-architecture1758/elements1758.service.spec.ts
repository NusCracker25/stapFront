import { TestBed } from '@angular/core/testing';

import { Elements1758Service } from './elements1758.service';

describe('Elements1758Service', () => {
  let service: Elements1758Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Elements1758Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
