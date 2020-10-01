import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef, AfterViewInit, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FieldConfig } from "../Infra/form.interfaces";
import { environment } from 'src/environments/environment';

@Component({
  exportAs: "dynamicFieldSet",
  selector: "dynamic-field-set",
  templateUrl: './dynamic-field-set.component.html',
  styleUrls: ['./dynamic-field-set.component.css']
})
export class DynamicFormComponent implements OnInit, AfterViewInit {

  @Input() fields: FieldConfig[] = [];
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();
  resources = environment.resources;

  form: FormGroup;

  constructor(private fb: FormBuilder, private elementRef: ElementRef, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.createControl(this.fields);
  }

  get value() {
    return this.form.value;
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
    let buttons = this.elementRef.nativeElement.querySelectorAll('button.dynamicButton');
    buttons.forEach(button => {
      button.addEventListener('click', (data) => this.buttonClick.emit(data.currentTarget.innerText));
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  onCancelClick() {
    this.cancel.emit();
  }

  onButtonClick(data) {
    this.buttonClick.emit(data);
  }

  createControl(fieldsConfig: Array<FieldConfig>) {
    const group = this.fb.group({});
    fieldsConfig.forEach(field => {
      if (field.type === "button") return;
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    this.form = group;
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
