import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxInputDialogComponent } from './nx-input-dialog.component';

describe('NxInputDilogComponent', () => {
  let component: NxInputDialogComponent;
  let fixture: ComponentFixture<NxInputDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxInputDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
