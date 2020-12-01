import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxSeparateDigitInputComponent } from './nx-separate-digit-input.component';

describe('NxSeparateDigitInputComponent', () => {
  let component: NxSeparateDigitInputComponent;
  let fixture: ComponentFixture<NxSeparateDigitInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxSeparateDigitInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxSeparateDigitInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
