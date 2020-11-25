import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareProviderInformationComponent } from './healthcare-provider-information.component';

describe('HealthcareProviderInformationComponent', () => {
  let component: HealthcareProviderInformationComponent;
  let fixture: ComponentFixture<HealthcareProviderInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthcareProviderInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthcareProviderInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
