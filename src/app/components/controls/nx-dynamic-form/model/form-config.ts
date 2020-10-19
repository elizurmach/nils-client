import { FieldSetConfig } from './field-set-config';

export interface FormConfig extends FieldSetConfig  {
  actions?: { [key: string]: FormConfig };
}
