import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { resources } from 'src/assets/resources/general-resources'

@Component({
  selector: 'app-nx-custom-date-input',
  templateUrl: './nx-custom-date-input.component.html',
  styleUrls: ['./nx-custom-date-input.component.css']
})
export class NxCustomDateInputComponent implements OnInit {

  @Input() value?: Date;
  @Output() change = new EventEmitter<Date>();

  public month: number;
  public day: number;
  public year: number;
  public resources = resources;

  private date: Date;

  constructor() { }

  ngOnInit() {
    if (this.value) {
      this.date = this.value;
    } else {
      this.date = new Date();
    }
  }

  monthChange(value: number): void {
    this.date.setMonth(value);
    if (!this.value || this.value.getMonth() != this.date.getMonth()) {
      this.value = this.date;
      this.change.emit(this.value);
    }
  }

  dayChange(value: number): void {
    this.date.setDate(value);
    if (!this.value || this.value.getDate() != this.date.getDate()) {
      this.value = this.date;
      this.change.emit(this.value);
    }
  }

  yearChange(value: number): void {
    this.date.setFullYear(value);
    if (!this.value || this.value.getFullYear() != this.date.getFullYear()) {
      this.value = this.date;
      this.change.emit(this.value);
    }
  }
}
