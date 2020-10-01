import { Validators } from '@angular/forms';

export interface ValidatorConfig {
  name: "required" | "pattern";
  pattern?: string;
  validator?: Validators;
  message: string;
}
export interface FieldConfig {
  name: string;
  label?: string;
  inputType?: "text" | "number" | "email";
  options?: string[] | string;
  type: "input" | "file" | "autocomplete" | "select" | "date" | "checkbox" | "radiobutton" | "textarea";
  value?: any;
  defaultValue?: any;
  validations?: ValidatorConfig[];
  readonly?: boolean;
}
export interface FieldSetConfig {
  title?: string;
  icon?: string;
  fields: Array<FieldConfig | FieldSetConfig>;
}
