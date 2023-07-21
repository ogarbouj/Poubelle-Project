/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CandidatService } from './candidat.service';

describe('Service: Candidat', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidatService]
    });
  });

  it('should ...', inject([CandidatService], (service: CandidatService) => {
    expect(service).toBeTruthy();
  }));
});
