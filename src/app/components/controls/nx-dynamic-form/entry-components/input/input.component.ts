import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../model/field-config";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() { }
}
