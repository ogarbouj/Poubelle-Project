/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OffreRecyclageComponent } from './OffreRecyclage.component';

describe('OffreRecyclageComponent', () => {
  let component: OffreRecyclageComponent;
  let fixture: ComponentFixture<OffreRecyclageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreRecyclageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreRecyclageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
