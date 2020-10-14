import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../model/field-config";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
