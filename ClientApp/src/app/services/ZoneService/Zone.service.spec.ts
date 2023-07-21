/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ZoneService } from './Zone.service';

describe('Service: Zone', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZoneService]
    });
  });

  it('should ...', inject([ZoneService], (service: ZoneService) => {
    expect(service).toBeTruthy();
  }));
});
