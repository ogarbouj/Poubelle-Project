/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppelOffresComponent } from './appelOffres.component';

describe('AppelOffresComponent', () => {
  let component: AppelOffresComponent;
  let fixture: ComponentFixture<AppelOffresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppelOffresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppelOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
