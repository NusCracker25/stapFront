import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInfobarLeftComponent } from './ui-infobar-left.component';

describe('UiInfobarLeftComponent', () => {
  let component: UiInfobarLeftComponent;
  let fixture: ComponentFixture<UiInfobarLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiInfobarLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiInfobarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
