import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAccessionsListComponent } from './pending-accessions-list.component';

describe('PendingAccessionsListComponent', () => {
  let component: PendingAccessionsListComponent;
  let fixture: ComponentFixture<PendingAccessionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingAccessionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingAccessionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
