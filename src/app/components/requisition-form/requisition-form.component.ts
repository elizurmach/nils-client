import { Component, OnInit, ContentChild, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Accession } from '../../model/accession';
import { AccessionService } from '../../services/accession-service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmphesizeFirstCharecter } from '../../pipes/emphesize-first-charecter.pipe';
import { RequisitionForm } from '../../model/requisition-form';
import { getPatientInformationFormGroup } from 'src/assets/resources/form-groups/patient-information.form-group';
import { getHealthcareProviderFormGroup } from 'src/assets/resources/form-groups/healthcare-provider.form-group';
import { getSpecimenInfoFormGroup } from 'src/assets/resources/form-groups/specimen-information.form-group';
import { getBillingInfoFormGroup } from 'src/assets/resources/form-groups/billing-information.form-group';
import { requisitionFormResources as resources } from 'src/assets/resources/requisition-form-resources'

@Component({
  selector: 'app-requisition-form',
  templateUrl: './requisition-form.component.html',
  styleUrls: ['./requisition-form.component.css']
})

export class RequisitionFormComponent implements OnInit {
  @ContentChild('rightButtons', { static: false }) template: TemplateRef<any>;
  private id: number;

  public resources = resources;
  public header: string;
  public title: string;
  public subTitle: string;
  public accession: Accession;
  public requisitionForm: RequisitionForm;
  public patientInfoFormGroup: FormGroup;
  public healthcareProviderFormGroup: FormGroup;
  public specimenInfoFormGroup: FormGroup;
  public billingInfoFormGroup: FormGroup;
  public comments: string;

  constructor(private route: ActivatedRoute, private service: AccessionService,
    private formBuilder: FormBuilder, private testPipe: EmphesizeFirstCharecter) { }

  ngOnInit() {
    this.header = this.resources.header;
    this.title = this.resources.title;
    this.subTitle = '';//this.testPipe.transform
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getAccessionById(this.id).subscribe(res => {
      this.accession = res;
      this.title = this.resources.title + ':' + this.accession.accessionNumber;
      this.subTitle = this.testPipe.transform(this.accession.tOrdered);
    });
    this.service.getHealthcareProviderInfoByAccessionId(this.id).subscribe(res => {
      this.requisitionForm = {
        pInfo: {}, hcpInfo: {}, specInfo: {}, billInfo: {}, accessionNumber: this.accession.accessionNumber, id: this.id, comments: ''
      }
    })
    this.patientInfoFormGroup = getPatientInformationFormGroup(this.formBuilder);
    this.healthcareProviderFormGroup = getHealthcareProviderFormGroup(this.formBuilder);
    this.specimenInfoFormGroup = getSpecimenInfoFormGroup(this.formBuilder);
    this.billingInfoFormGroup = getBillingInfoFormGroup(this.formBuilder);
  }

  onCloseClick() {

  }

  saveClick() {

  }

  problemLogClick() {

  }

  reqFormClick() {

  }

  compleateClick() {

  }
}
