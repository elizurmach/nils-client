import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NxFormComponent } from './nx-form/nx-form.component';
import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatOptionModule,
  MatCheckboxModule,
  MatRadioModule,
} from "@angular/material";

import { NxFormContentComponent } from './nx-form-content/nx-form-content.component';
import { DynamicFieldDirective } from './dynamic-field/dynamic-field.directive';
import { InputComponent } from './entry-components/input/input.component';
import { DateComponent } from './entry-components/date/date.component';
import { SelectComponent } from './entry-components/select/select.component';
import { RadiobuttonComponent } from './entry-components/radiobutton/radiobutton.component';
import { CheckboxComponent } from './entry-components/checkbox/checkbox.component';
import { FileComponent } from './entry-components/file/file.component';
import { TextAreaComponent } from './entry-components/text-area/text-area.component';
import { AutocompleteComponent } from './entry-components/autocomplete/autocomplete.component';
import { NxFieldSetComponent } from './nx-field-set/nx-field-set.component';


@NgModule({
  declarations: [
    NxFormComponent, 
    NxFormContentComponent, 
    DynamicFieldDirective, 
    InputComponent, 
    DateComponent, 
    SelectComponent, 
    RadiobuttonComponent, 
    CheckboxComponent, 
    FileComponent,
    TextAreaComponent,
    AutocompleteComponent,
    NxFieldSetComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule, 
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  exports: [
    NxFormComponent
  ],
  entryComponents: [
    InputComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    FileComponent,
    TextAreaComponent,
    AutocompleteComponent,
    NxFieldSetComponent
  ],
  bootstrap: [NxFormComponent]
})
export class NxFormModule { }
