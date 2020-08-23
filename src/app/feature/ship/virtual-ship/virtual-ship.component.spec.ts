import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualShipComponent } from './virtual-ship.component';

describe('VirtualShipComponent', () => {
  let component: VirtualShipComponent;
  let fixture: ComponentFixture<VirtualShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
