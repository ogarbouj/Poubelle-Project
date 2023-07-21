/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditPoubelleComponent } from './edit-poubelle.component';

describe('EditPoubelleComponent', () => {
  let component: EditPoubelleComponent;
  let fixture: ComponentFixture<EditPoubelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPoubelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPoubelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
