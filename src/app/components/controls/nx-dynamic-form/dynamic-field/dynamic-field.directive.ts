import { OnInit, ComponentFactoryResolver, Directive, Input, ViewContainerRef, Output } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../infra/form.interfaces";
import { InputComponent } from "../entry-components/input/input.component";
import { SelectComponent } from "../entry-components/select/select.component";
import { DateComponent } from "../entry-components/date/date.component";
import { CheckboxComponent } from '../entry-components/checkbox/checkbox.component';
import { RadiobuttonComponent } from '../entry-components/radiobutton/radiobutton.component';
import { FileComponent } from '../entry-components/file/file.component';
import { TextAreaComponent } from '../entry-components/text-area/text-area.component';
import { AutocompleteComponent } from '../entry-components/autocomplete/autocomplete.component';

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

  @Input() field: FieldConfig;
  @Input() group: FormGroup;

  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
  
}

