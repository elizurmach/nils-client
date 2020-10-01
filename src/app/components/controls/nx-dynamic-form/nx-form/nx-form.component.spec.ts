import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxFormComponent } from './nx-form.component';

describe('NxFormComponent', () => {
  let component: NxFormComponent;
  let fixture: ComponentFixture<NxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
