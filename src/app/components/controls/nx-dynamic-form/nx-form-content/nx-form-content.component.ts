import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef, AfterViewInit, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FieldConfig, FieldSetConfig } from "../Infra/form.interfaces";
import { environment } from 'src/environments/environment';

@Component({
  exportAs: "dynamicFieldSet",
  selector: "nx-form-content",
  templateUrl: './nx-form-content.component.html',
  styleUrls: ['./nx-form-content.component.css']
})
export class NxFormContentComponent implements OnInit, AfterViewInit {

  @Input() fields: Array<FieldSetConfig | FieldConfig> = [];
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  resources = environment.resources;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.createFormGroup(this.fields);
  }

  get value() {
    return this.formGroup.value;
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.formGroup.valid) {
      this.submit.emit(this.formGroup.value);
    } else {
      this.validateAllFormFields(this.formGroup);
    }
  }

  onCancelClick() {
    this.cancel.emit();
  }

  createFormGroup(config: Array<FieldSetConfig | FieldConfig>) {
    const fg = this.fb.group({});
    this.setupControls(config, fg);
    this.formGroup = fg;
  }

  setupControls(config: Array<FieldSetConfig | FieldConfig>, fg: FormGroup) {
    config.forEach(field => {
      if (!field)
        return;

      let fieldConfig = field as FieldConfig;
      if (fieldConfig) {
        this.createControl(fieldConfig, fg);
      }
      else {
        let fieldSetConfig = field as FieldSetConfig;
        if (fieldSetConfig) {
          this.setupControls(fieldSetConfig.fields, fg);
        }
      }
    });
  }

  createControl(fieldConfig: FieldConfig, fornGroup: FormGroup) {
    const control = this.fb.control(
      fieldConfig.value,
      this.bindValidations(fieldConfig.validations || [])
    );
    fornGroup.addControl(fieldConfig.name, control);
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
