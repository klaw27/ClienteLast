import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartidorPage } from './repartidor.page';

describe('RepartidorPage', () => {
  let component: RepartidorPage;
  let fixture: ComponentFixture<RepartidorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepartidorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepartidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
