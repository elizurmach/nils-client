import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxStepContentComponent } from './nx-step-content.component';

describe('NxStepContentComponent', () => {
  let component: NxStepContentComponent;
  let fixture: ComponentFixture<NxStepContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxStepContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxStepContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
