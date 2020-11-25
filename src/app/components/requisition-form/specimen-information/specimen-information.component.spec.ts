import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecimenInformationComponent } from './specimen-information.component';

describe('SpecimenInformationComponent', () => {
  let component: SpecimenInformationComponent;
  let fixture: ComponentFixture<SpecimenInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecimenInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecimenInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
