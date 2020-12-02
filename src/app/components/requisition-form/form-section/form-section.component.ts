import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})
export class FormSectionComponent implements OnInit {

  @Input() stepNumber: number;
  @Input() title: string;
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
