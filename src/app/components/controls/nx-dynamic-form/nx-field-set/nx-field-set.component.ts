import { Component, OnInit, Input } from '@angular/core';
import { FieldSetConfig } from '../Infra/form.interfaces';

@Component({
  selector: 'app-nx-field-set',
  templateUrl: './nx-field-set.component.html',
  styleUrls: ['./nx-field-set.component.css']
})
export class NxFieldSetComponent implements OnInit {

  @Input() field: FieldSetConfig
  constructor() { }

  ngOnInit() {
  }
}
