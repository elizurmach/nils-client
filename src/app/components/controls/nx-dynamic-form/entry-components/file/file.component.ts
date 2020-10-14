import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../model/field-config";

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
