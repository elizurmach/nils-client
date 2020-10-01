import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../Infra/form.interfaces";

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
