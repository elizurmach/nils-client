import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccessionComponent } from './new-accession.component';

describe('NewAccessionComponent', () => {
  let component: NewAccessionComponent;
  let fixture: ComponentFixture<NewAccessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAccessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
