import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { resources } from 'src/assets/resources/general-resources'

@Component({
  selector: 'app-nx-custom-date-input',
  templateUrl: './nx-custom-date-input.component.html',
  styleUrls: ['./nx-custom-date-input.component.css']
})
export class NxCustomDateInputComponent implements OnInit {

  @Input() value?: Date;
  @Output() change = new EventEmitter<Date>();

  public month?: number;
  public day?: number;
  public year?: number;
  public resources = resources;

  private date: Date;

  constructor(private changeDitecter: ChangeDetectorRef) { }

  ngOnInit() {
    if (this.value) {
      this.date = this.value;
    } else {
      this.date = new Date();
    }
  }

  monthChange(value: number): void {
    if (isNaN(Number(value))) {
      return;
    }
    this.date.setMonth(value - 1);
    let month = this.date.getMonth() + 1;
    if (value !== month) {
      this.month = month;
      this.changeDitecter.detectChanges();
    }
    else if (!this.value || this.value.getMonth() != this.date.getMonth()) {
      this.value = this.date;
      this.change.emit(this.value);
    }
  }

  dayChange(value: number): void {
    if (isNaN(Number(value))) {
      return;
    }
    this.date.setDate(value);
    let day = this.date.getDate();
    if (value !== day) {
      this.day = day;
      this.changeDitecter.detectChanges();
    }
    if (!this.value || this.value.getDate() != this.date.getDate()) {
      this.value = this.date;
      this.change.emit(this.value);
    }
  }

  yearChange(value: number): void {
    if (isNaN(Number(value))) {
      return;
    }
    this.date.setFullYear(value);
    let year = this.date.getFullYear();
    if (value !== year) {
      this.year = year;
      this.changeDitecter.detectChanges();
    }
    if (!this.value || this.value.getFullYear() != this.date.getFullYear()) {
      this.value = this.date;
      this.change.emit(this.value);
    }
  }
}
