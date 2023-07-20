import { TestBed } from '@angular/core/testing';

import { ServiceOffrePromoService } from './service-offre-promo.service';

describe('ServiceOffrePromoService', () => {
  let service: ServiceOffrePromoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceOffrePromoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
