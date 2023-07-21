/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetailOffreByRecycleurComponent } from './detailOffreByRecycleur.component';

describe('DetailOffreByRecycleurComponent', () => {
  let component: DetailOffreByRecycleurComponent;
  let fixture: ComponentFixture<DetailOffreByRecycleurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailOffreByRecycleurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOffreByRecycleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
