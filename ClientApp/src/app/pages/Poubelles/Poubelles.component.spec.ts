/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PoubellesComponent } from './Poubelles.component';

describe('PoubellesComponent', () => {
  let component: PoubellesComponent;
  let fixture: ComponentFixture<PoubellesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoubellesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoubellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
