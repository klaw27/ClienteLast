import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandadoPage } from './mandado.page';

describe('MandadoPage', () => {
  let component: MandadoPage;
  let fixture: ComponentFixture<MandadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
