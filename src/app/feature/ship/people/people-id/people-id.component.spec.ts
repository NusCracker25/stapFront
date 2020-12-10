import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleIdComponent } from './people-id.component';

describe('PeopleIdComponent', () => {
  let component: PeopleIdComponent;
  let fixture: ComponentFixture<PeopleIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
