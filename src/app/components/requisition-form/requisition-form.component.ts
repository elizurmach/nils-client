import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Accession } from '../../model/accession';
import { AccessionService } from '../../services/accession-service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmphesizeFirstCharecter } from '../../pipes/emphesize-first-charecter.pipe';
import { getPatientInformationFormGroup } from 'src/assets/resources/form-groups/patient-information.form-group';
import { RequisitionForm } from '../../model/requisition-form';
import { getHealthcareProviderFormGroup } from 'src/assets/resources/form-groups/healthcare-provider.form-group';
import { getSpecimenInfoFormGroup } from 'src/assets/resources/form-groups/specimen-information.form-group';
import { getBillingInfoFormGroup } from 'src/assets/resources/form-groups/billing-information.form-group';

@Component({
  selector: 'app-requisition-form',
  templateUrl: './requisition-form.component.html',
  styleUrls: ['./requisition-form.component.css']
})

export class RequisitionFormComponent implements OnInit {

  private id: number;

  public resources = environment.resources;
  public header: string;
  public title: string;
  public subTitle: string;
  public accession: Accession;
  public requisitionForm: RequisitionForm;
  public patientInfoFormGroup: FormGroup;
  public healthcareProviderFormGroup: FormGroup;
  public specimenInfoFormGroup: FormGroup;
  public billingInfoFormGroup: FormGroup;

  constructor(private route: ActivatedRoute, private service: AccessionService,
    private formBuilder: FormBuilder, private testPipe: EmphesizeFirstCharecter ) { }

  ngOnInit() {
    this.header = this.resources.requisitionForm;
    this.title = this.resources.accessionNumber;
    this.subTitle = '';//this.testPipe.transform
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getAccessionById(this.id).subscribe(res => {
      this.accession = res;
      this.title = this.resources.accessionNumber + ':' + this.accession.accessionNumber;
      this.subTitle = this.testPipe.transform(this.accession.tOrdered);
    });
    this.service.getHealthcareProviderInfoByAccessionId(this.id).subscribe(res => {
      this.requisitionForm = {
        pInfo: {}, hcpInfo: {}, specInfo: {}, billInfo: {}, accessionNumber: this.accession.accessionNumber, id: this.id, comments:''
      }
    })
    this.patientInfoFormGroup = getPatientInformationFormGroup(this.formBuilder);
    this.healthcareProviderFormGroup = getHealthcareProviderFormGroup(this.formBuilder);
    this.specimenInfoFormGroup = getSpecimenInfoFormGroup(this.formBuilder);
    this.billingInfoFormGroup = getBillingInfoFormGroup(this.formBuilder);
  }

  onCloseClick() {

  }
}
