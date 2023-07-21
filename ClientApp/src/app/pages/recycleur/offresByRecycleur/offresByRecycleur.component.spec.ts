/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OffresByRecycleurComponent } from './offresByRecycleur.component';

describe('OffresByRecycleurComponent', () => {
  let component: OffresByRecycleurComponent;
  let fixture: ComponentFixture<OffresByRecycleurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffresByRecycleurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresByRecycleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
