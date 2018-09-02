import { TestBed, inject } from '@angular/core/testing';

import { AllhttpService } from './allhttp.service';

describe('AllhttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllhttpService]
    });
  });

  it('should be created', inject([AllhttpService], (service: AllhttpService) => {
    expect(service).toBeTruthy();
  }));
});
