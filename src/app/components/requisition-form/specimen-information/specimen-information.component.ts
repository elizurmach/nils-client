import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SpecimenInfo } from '../../../model/requisition-form';
import { specimenInfoResources } from 'src/assets/resources/specimen-info-resources';
import { MatCheckboxChange } from '@angular/material';
import { specimenInfoErrorMessages } from 'src/assets/resources/form-groups/specimen-information.form-group';

@Component({
  selector: 'app-specimen-information',
  templateUrl: './specimen-information.component.html',
  styleUrls: ['./specimen-information.component.css']
})
export class SpecimenInformationComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() data: SpecimenInfo;
  @Input() stepNumber: number;
  public resources = specimenInfoResources;
  public quantities: Array<number>;

  constructor() { }

  ngOnInit() {
    this.quantities = [];
    for (let quantity in this.resources.quantities) {
      this.quantities.push(this.resources.quantities[quantity]);
    }
  }

  quantityChange(event: MatCheckboxChange, value: number) {
    if (event.checked) {
      this.data.sQuantity = value;
    }
    else {
      this.data.sQuantity = null;
    }
  }

  getErrorMessage(fieldName: string) {
    if (!this.formGroup.controls[fieldName].touched) {
      return null;
    }
    if (this.formGroup.controls[fieldName] &&
      this.formGroup.controls[fieldName].errors) {
      for (let err in this.formGroup.controls[fieldName].errors) {
        if (err &&
          specimenInfoErrorMessages[fieldName] &&
          specimenInfoErrorMessages[fieldName][err]) {
          return specimenInfoErrorMessages[fieldName][err];
        }
      }
    }
    return this.resources.messages.genericFieldError;
  }
}
