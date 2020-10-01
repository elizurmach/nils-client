import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { FormConfig, FieldConfig, ValidatorConfig } from '../Infra/form.interfaces';
import { environment } from 'src/environments/environment';
import { resources as formResources } from "src/assets/Resources/form-resource"
import { Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nx-form',
  templateUrl: './nx-form.component.html',
  styleUrls: ['./nx-form.component.css']
})
export class NxFormComponent implements OnInit, OnChanges {

  @Input() entityName: string;
  @Input() entity: any;
  @Input() edit: boolean;

  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @Output() onButton = new EventEmitter<any>();
  formConfig: FormConfig;
  resources = environment.resources;
  formResources = formResources;
  showFields: boolean = true;

  constructor(private dataService: DataService) {

  }

  ngOnChanges() {
    this.initializeComponent()
  }

  ngOnInit(): void {
    this.initializeComponent()
  }

  async initializeComponent() {
    this.formConfig = await this.setFormConfig(this.entity, this.edit);
  }

  async setFormConfig(entity: any, edit: boolean = false): Promise<FormConfig> {
    let customConfig = formResources[this.entityName];
    let formConfig: FormConfig = {
      title: edit ? customConfig.edit : customConfig.add,
      icon: customConfig.icon,
      fields: []
    }
    for (let prop in formResources[this.entityName].fields) {
      if (!customConfig.fields[prop])
        continue;
      let field: FieldConfig = {
        type: this.getFieldType(prop, entity, customConfig.fields[prop]),
        name: prop,
        label: this.getFieldLabel(prop, customConfig.fields[prop]),
        value: this.getFieldValue(prop, entity, customConfig.fields[prop], edit),
        options: await this.getFieldOptions(customConfig.fields[prop]),
        validations: this.getFieldValidations(customConfig.fields[prop])
      }
      formConfig.fields.push(field);
    }
    this.showFields = false;
    setTimeout(() => { this.showFields = true; })
    return formConfig;
  }

  getFieldType(propName: string, entity: any, config: any): string {
    if (config && config.type)
      return config.type;
    if (entity[propName] !== null &&
      entity[propName] !== undefined) {
      switch (typeof entity[propName]) {
        case 'boolean':
          return 'checkbox';
        case 'object':
          if (entity[propName] instanceof Date)
            return 'date';
      }
    }
    return 'input';
  }

  getFieldLabel(propName: string, config: any): string {
    if (config && config.label)
      return config.label;
    return propName.toUpperCase();
  }

  getFieldValue(propName: string, entity: any, config: any, edit: boolean = false): any {
    if (entity[propName])
      return entity[propName];
    if (config && config.defaultValue)
      return config.defaultValue;
    return undefined;
  }

 async getFieldOptions(config: any): Promise<Array<string>> {
    if (config && config.options) {
      if (typeof config.options == 'string') {
        let values = <Array<string>>await this.dataService.getLookupValues(config.options).toPromise();
        return values;
      }
      else if (Array.isArray(config.options)) {
        let options = [];
        for (let i = 0; i < config.options.length; i++) {
          options.push(config.options[i].toString())
        }
        return options;
      }
      else
        return [];
    }
    return undefined;
  }

  getFieldValidations(config: any): Array<ValidatorConfig> {
    if (config && config.validations) {
      let validators: ValidatorConfig[] = [];
      for (var i = 0; i < config.validations.length; i++) {
        let val = config.validations[i];
        switch (val.name) {
          case 'required':
            validators.push({ name: 'required', validator: Validators.required, message: val.message });
            break;
          case 'pattern':
            validators.push({ name: 'pattern', validator: Validators.pattern(val.pattern), message: val.message });
        }
      }
      return validators;
    }
    return [];
  }

  onSubmitClick(value: any) {
    this.onSubmit.emit(value);
  }

  onCancelClick() {
    this.onCancel.emit();
  }

}
