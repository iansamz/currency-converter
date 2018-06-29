import { TestBed, inject } from '@angular/core/testing';

import { CurrencyapiService } from './currencyapi.service';

describe('CurrencyapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyapiService]
    });
  });

  it('should be created', inject([CurrencyapiService], (service: CurrencyapiService) => {
    expect(service).toBeTruthy();
  }));
});
