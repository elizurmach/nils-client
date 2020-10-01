export interface ValidatorConfig {
    name: string;
    validator: any;
    message: string;
}
export interface FieldConfig {
    label?: string;
    name?: string;
    inputType?: string;
    options?: string[];
    type: string;
    value?: any;
    validations?: ValidatorConfig[];
    readonly?: boolean;
}
export interface FormConfig {
  title?: string;
  icon?: string;
  fields: FieldConfig[];
}
