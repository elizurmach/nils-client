import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {

  public title: string;
  public resources = environment.resources;
  public sample: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.sample = {
      patientId: '1234567890',
      samplePhoto: undefined,
      reqisutionForm: undefined,
      requiredTest: undefined,
      dueDate: new Date(),
      containerExpectedCount: 1,
      containerActualCount: undefined,
      isPackageIntact: undefined,
      containerFault: undefined,
      containerFaultDescription: undefined
    }
  }

  onSubmit(value) {
    console.log(this.sample);
  }

  selectionChange(option) {

  }
}
