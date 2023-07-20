/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminGestionOffreRecyclageComponent } from './AdminGestionOffreRecyclage.component';

describe('AdminGestionOffreRecyclageComponent', () => {
  let component: AdminGestionOffreRecyclageComponent;
  let fixture: ComponentFixture<AdminGestionOffreRecyclageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGestionOffreRecyclageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGestionOffreRecyclageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
