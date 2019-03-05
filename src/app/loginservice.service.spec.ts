import { TestBed, inject } from '@angular/core/testing';

import { LoginserviceService } from './loginservice.service';

describe('LoginserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginserviceService]
    });
  });

  it('should be created', inject([LoginserviceService], (service: LoginserviceService) => {
    expect(service).toBeTruthy();
  }));
});
