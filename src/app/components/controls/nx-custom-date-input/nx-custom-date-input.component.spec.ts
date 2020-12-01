import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxCustomDateInputComponent } from './nx-custom-date-input.component';

describe('NxCustomDateInputComponent', () => {
  let component: NxCustomDateInputComponent;
  let fixture: ComponentFixture<NxCustomDateInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxCustomDateInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxCustomDateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
