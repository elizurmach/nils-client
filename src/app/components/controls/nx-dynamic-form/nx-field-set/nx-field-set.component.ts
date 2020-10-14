import { Component, OnInit, Input } from '@angular/core';
import { FieldSetConfig } from "../model/field-set-config";
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nx-field-set',
  templateUrl: './nx-field-set.component.html',
  styleUrls: ['./nx-field-set.component.css']
})
export class NxFieldSetComponent implements OnInit {

  field: FieldSetConfig
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }
}
