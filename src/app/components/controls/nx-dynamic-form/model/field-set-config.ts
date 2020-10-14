import { FieldConfig } from './field-config';

export interface FieldSetConfig {
  title: string;
  icon?: string;
  fields: Array<FieldConfig | FieldSetConfig>;
}
