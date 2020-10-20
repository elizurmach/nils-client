import { ValidatorConfig } from './validator-config';

export interface FieldConfig {
  name: string;
  label?: string;
  icon?: string;
  inputType?: "text" | "number" | "email";
  options?: string[] | string;
  type: "input" | "file" | "autocomplete" | "select" | "date" | "checkbox" | "radiobutton" | "textarea" | "filemanagement";
  value?: any;
  defaultValue?: any;
  validations?: ValidatorConfig[];
  readonly?: boolean;
}
