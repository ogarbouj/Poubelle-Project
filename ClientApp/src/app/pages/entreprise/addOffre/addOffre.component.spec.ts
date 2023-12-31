/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddOffreComponent } from './addOffre.component';

describe('AddOffreComponent', () => {
  let component: AddOffreComponent;
  let fixture: ComponentFixture<AddOffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
