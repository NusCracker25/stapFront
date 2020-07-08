import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { World3dComponent } from './world3d.component';

describe('World3dComponent', () => {
  let component: World3dComponent;
  let fixture: ComponentFixture<World3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ World3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(World3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
