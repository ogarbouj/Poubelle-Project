/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceOffreRecyService } from './ServiceOffreRecy.service';

describe('Service: ServiceOffreRecy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceOffreRecyService]
    });
  });

  it('should ...', inject([ServiceOffreRecyService], (service: ServiceOffreRecyService) => {
    expect(service).toBeTruthy();
  }));
});
