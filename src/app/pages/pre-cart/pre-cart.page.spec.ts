import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreCartPage } from './pre-cart.page';

describe('PreCartPage', () => {
  let component: PreCartPage;
  let fixture: ComponentFixture<PreCartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreCartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
