import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingReportsListComponent } from './pending-reports-list.component';

describe('PendingReportsListComponent', () => {
  let component: PendingReportsListComponent;
  let fixture: ComponentFixture<PendingReportsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingReportsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingReportsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
