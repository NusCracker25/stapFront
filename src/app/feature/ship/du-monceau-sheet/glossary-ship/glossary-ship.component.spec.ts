import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossaryShipComponent } from './glossary-ship.component';

describe('GlossaryShipComponent', () => {
  let component: GlossaryShipComponent;
  let fixture: ComponentFixture<GlossaryShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlossaryShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlossaryShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
