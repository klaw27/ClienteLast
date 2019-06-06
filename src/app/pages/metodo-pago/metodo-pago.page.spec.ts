import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoPagoPage } from './metodo-pago.page';

describe('MetodoPagoPage', () => {
  let component: MetodoPagoPage;
  let fixture: ComponentFixture<MetodoPagoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodoPagoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodoPagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
