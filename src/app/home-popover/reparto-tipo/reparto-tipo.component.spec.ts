import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartoTipoComponent } from './reparto-tipo.component';

describe('RepartoTipoComponent', () => {
  let component: RepartoTipoComponent;
  let fixture: ComponentFixture<RepartoTipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepartoTipoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepartoTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
