/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminAjoutOffrePromotionnelleComponent } from './AdminAjoutOffrePromotionnelle.component';

describe('AdminAjoutOffrePromotionnelleComponent', () => {
  let component: AdminAjoutOffrePromotionnelleComponent;
  let fixture: ComponentFixture<AdminAjoutOffrePromotionnelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAjoutOffrePromotionnelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAjoutOffrePromotionnelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
