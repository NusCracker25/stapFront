import { MaterialModule } from './../../shared/material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { StrapComponent } from './strap.component';
import { importType } from '@angular/compiler/src/output/output_ast';

describe('StrapComponent', () => {
  let component: StrapComponent;
  let fixture: ComponentFixture<StrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StrapComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MaterialModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
