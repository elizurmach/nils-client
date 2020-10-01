import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxFieldSetComponent } from './nx-field-set.component';

describe('NxFieldSetComponent', () => {
  let component: NxFieldSetComponent;
  let fixture: ComponentFixture<NxFieldSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxFieldSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxFieldSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
