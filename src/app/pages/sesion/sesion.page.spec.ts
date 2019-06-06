import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionPage } from './sesion.page';

describe('SesionPage', () => {
  let component: SesionPage;
  let fixture: ComponentFixture<SesionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
