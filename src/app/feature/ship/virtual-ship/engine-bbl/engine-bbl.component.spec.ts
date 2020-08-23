import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineBBLComponent } from './engine-bbl.component';

describe('EngineBBLComponent', () => {
  let component: EngineBBLComponent;
  let fixture: ComponentFixture<EngineBBLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineBBLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineBBLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
