import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { FieldSetConfig, FieldConfig, ValidatorConfig } from '../Infra/form.interfaces';
import { resources as formResources } from 'src/assets/resources/form-resources'
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
  formConfig: FieldSetConfig;
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
    this.formConfig = await this.setupFormConfig(this.entity);
  }

  async setupFormConfig(entity: any): Promise<FieldSetConfig> {
    let formConfig: FieldSetConfig = formResources[this.entityName];
    return this.setupFieldSetConfig(entity, formConfig)
  }

  async setupFieldSetConfig(entity: any, formConfig: FieldSetConfig): Promise<FieldSetConfig> {
    if (!formConfig) {
      return;
    }
    formConfig.fields.forEach(async conf => {
      if (!conf)
        return;

      if (conf['name']) {
        let fieldConfig = conf as FieldConfig
        if (fieldConfig) {
          fieldConfig.name = this.validateFieldName(fieldConfig.name, entity);
          fieldConfig.label = this.getFieldLabel(fieldConfig.name, fieldConfig.label);
          if (fieldConfig.type === 'input' && !fieldConfig.inputType) {
            fieldConfig.inputType = 'text';
          }
          if (fieldConfig.options) {
            fieldConfig.options = await this.getFieldOptions(fieldConfig.options);
          }
          fieldConfig.value = this.getFieldValue(fieldConfig.name, entity, fieldConfig.defaultValue);
          fieldConfig.validations = this.getFieldValidations(fieldConfig.validations);
          conf = fieldConfig;
        }
      }
      else if (conf['title']) {
        let fieldSetConfig = conf as FieldSetConfig
        if (fieldSetConfig) {
          conf = await this.setupFieldSetConfig(entity, fieldSetConfig);
        }
      }
    })
  }

  validateFieldName(fieldName: string, entity: any): string {
    if (entity) {
      for (let prop in entity) {
        if (prop && prop.toLowerCase() === fieldName.toLowerCase()) {
          return prop;
        }
      }
    }
    return fieldName;
  }

  getFieldLabel(fieldName: string, configuredLabel: string): string {
    if (configuredLabel)
      return configuredLabel;
    return fieldName.toUpperCase();
  }

  async getFieldOptions(options: string | string[]): Promise<Array<string>> {
    if (options) {
      if (typeof options == 'string') {
        let values = <Array<string>>await this.dataService.getLookupValues(options).toPromise();
        return values;
      }
      else if (Array.isArray(options)) {
        let options = [];
        for (let i = 0; i < options.length; i++) {
          options.push(options[i].toString())
        }
        return options;
      }
      else
        return [];
    }
    return undefined;
  }

  getFieldValue(fieldName: string, entity: any, defaultValue?: any): any {
    if (entity[fieldName])
      return entity[fieldName];
    if (defaultValue)
      return defaultValue;
    return undefined;
  }

  getFieldValidations(validations: Array<ValidatorConfig>): Array<ValidatorConfig> {
    if (validations) {
      for (var i = 0; i < validations.length; i++) {
        switch (validations[i].name) {
          case 'required':
            validations[i].validator = Validators.required;
            break;
          case 'pattern':
            validations[i].validator = Validators.pattern(validations[i].pattern);
        }
      }
      return validations;
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
