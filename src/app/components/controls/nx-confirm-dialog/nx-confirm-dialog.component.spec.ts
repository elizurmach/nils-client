import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxConfirmDialogComponent } from './nx-confirm-dialog.component';

describe('NxConfirmDialogComponent', () => {
  let component: NxConfirmDialogComponent;
  let fixture: ComponentFixture<NxConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
