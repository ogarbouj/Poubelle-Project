/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OffrePromoUpdateComponentComponent } from './OffrePromoUpdateComponent.component';

describe('OffrePromoUpdateComponentComponent', () => {
  let component: OffrePromoUpdateComponentComponent;
  let fixture: ComponentFixture<OffrePromoUpdateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffrePromoUpdateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffrePromoUpdateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
