/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OffreServiceService } from './offreService.service';

describe('Service: OffreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OffreServiceService]
    });
  });

  it('should ...', inject([OffreServiceService], (service: OffreServiceService) => {
    expect(service).toBeTruthy();
  }));
});
