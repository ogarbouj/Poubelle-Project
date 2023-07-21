/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TypeService } from './Type.service';

describe('Service: Type', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeService]
    });
  });

  it('should ...', inject([TypeService], (service: TypeService) => {
    expect(service).toBeTruthy();
  }));
});
