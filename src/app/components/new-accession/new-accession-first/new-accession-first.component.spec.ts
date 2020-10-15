import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccessionFirstComponent } from './new-accession-first.component';

describe('NewAccessionFirstComponent', () => {
  let component: NewAccessionFirstComponent;
  let fixture: ComponentFixture<NewAccessionFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAccessionFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccessionFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
