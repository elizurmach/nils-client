import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccessionSecondComponent } from './new-accession-second.component';

describe('NewAccessionSecondComponent', () => {
  let component: NewAccessionSecondComponent;
  let fixture: ComponentFixture<NewAccessionSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAccessionSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccessionSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
