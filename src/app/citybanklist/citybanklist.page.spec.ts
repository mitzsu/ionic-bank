import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitybanklistPage } from './citybanklist.page';

describe('CitybanklistPage', () => {
  let component: CitybanklistPage;
  let fixture: ComponentFixture<CitybanklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitybanklistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitybanklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
