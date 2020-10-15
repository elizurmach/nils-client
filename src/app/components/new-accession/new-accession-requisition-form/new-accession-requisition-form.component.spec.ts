import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccessionRequisitionFormComponent } from './new-accession-requisition-form.component';

describe('NewAccessionRequisitionFormComponent', () => {
  let component: NewAccessionRequisitionFormComponent;
  let fixture: ComponentFixture<NewAccessionRequisitionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAccessionRequisitionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccessionRequisitionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
