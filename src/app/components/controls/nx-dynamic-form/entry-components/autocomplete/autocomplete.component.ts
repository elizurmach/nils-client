import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { FieldConfig } from "../../Infra/form.interfaces";
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})

export class AutocompleteComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;
  control = new FormControl();
  filteredOptions: Observable<string[]>;
  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(),
      map(value => value && typeof value === 'object' ? value.toString() : value),
      map((value) => value ? this.filter(value) : this.field.options.slice()));
  }

  filter(name: string): string[] {
    return this.field.options.filter(option =>
      option.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
}
