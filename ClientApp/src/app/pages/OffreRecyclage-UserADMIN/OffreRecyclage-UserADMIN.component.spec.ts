/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OffreRecyclageUserADMINComponent } from './OffreRecyclage-UserADMIN.component';

describe('OffreRecyclageUserADMINComponent', () => {
  let component: OffreRecyclageUserADMINComponent;
  let fixture: ComponentFixture<OffreRecyclageUserADMINComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreRecyclageUserADMINComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreRecyclageUserADMINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
