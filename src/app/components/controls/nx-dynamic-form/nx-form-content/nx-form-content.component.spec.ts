import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxFormContentComponent } from './nx-form-content.component';

describe('NxFormContentComponent', () => {
  let component: NxFormContentComponent;
  let fixture: ComponentFixture<NxFormContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxFormContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxFormContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
