import { OnInit, ComponentFactoryResolver, Directive, Input, ViewContainerRef, ComponentFactory } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FieldConfig, FieldSetConfig } from "../infra/form.interfaces";
import { InputComponent } from "../entry-components/input/input.component";
import { SelectComponent } from "../entry-components/select/select.component";
import { DateComponent } from "../entry-components/date/date.component";
import { CheckboxComponent } from '../entry-components/checkbox/checkbox.component';
import { RadiobuttonComponent } from '../entry-components/radiobutton/radiobutton.component';
import { FileComponent } from '../entry-components/file/file.component';
import { TextAreaComponent } from '../entry-components/text-area/text-area.component';
import { AutocompleteComponent } from '../entry-components/autocomplete/autocomplete.component';
import { NxFieldSetComponent } from '../nx-field-set/nx-field-set.component';

const componentMapper = {
  autocomplete: AutocompleteComponent,
  input: InputComponent,
  select: SelectComponent,
  date: DateComponent,
  checkbox: CheckboxComponent,
  radiobutton: RadiobuttonComponent,
  file: FileComponent,
  textarea: TextAreaComponent
};
@Directive({
  selector: "[dynamicField]"
})
export class DynamicFieldDirective implements OnInit {

  @Input() field: FieldSetConfig | FieldConfig;
  @Input() group: FormGroup;

  componentRef: any;

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {}

  ngOnInit() {
    if (this.field['name']) {
      let fieldConfig = this.field as FieldConfig;
      if (fieldConfig) {
        const factory = this.resolver.resolveComponentFactory(
          componentMapper[fieldConfig.type]
        );
        this.createComponent(factory);
      }
    }
    else if (this.field['title']) {
      let fieldSetConfig = this.field as FieldSetConfig;
      if (fieldSetConfig) {
        const factory = this.resolver.resolveComponentFactory(NxFieldSetComponent);
        this.createComponent(factory);
      }
    }
  }
  createComponent(factory: ComponentFactory<any>) {
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}

