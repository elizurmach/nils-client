import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleateComponent } from './autocompleate.component';

describe('AutocompleateComponent', () => {
  let component: AutocompleateComponent;
  let fixture: ComponentFixture<AutocompleateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
