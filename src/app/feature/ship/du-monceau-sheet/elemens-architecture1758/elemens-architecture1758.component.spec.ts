import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElemensArchitecture1758Component } from './elemens-architecture1758.component';

describe('ElemensArchitecture1758Component', () => {
  let component: ElemensArchitecture1758Component;
  let fixture: ComponentFixture<ElemensArchitecture1758Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElemensArchitecture1758Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElemensArchitecture1758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
