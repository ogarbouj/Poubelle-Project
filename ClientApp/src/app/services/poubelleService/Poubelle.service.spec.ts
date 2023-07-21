/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PoubelleService } from './Poubelle.service';

describe('Service: Poubelle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoubelleService]
    });
  });

  it('should ...', inject([PoubelleService], (service: PoubelleService) => {
    expect(service).toBeTruthy();
  }));
});
