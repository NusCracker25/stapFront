import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuMonceauSheetComponent } from './du-monceau-sheet.component';

describe('DuMonceauSheetComponent', () => {
  let component: DuMonceauSheetComponent;
  let fixture: ComponentFixture<DuMonceauSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuMonceauSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuMonceauSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
