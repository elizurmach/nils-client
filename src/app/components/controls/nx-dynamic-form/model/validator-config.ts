import { Validators } from '@angular/forms';

export interface ValidatorConfig {
  name: "required" | "pattern";
  pattern?: string;
  validator?: Validators;
  message: string;
}
