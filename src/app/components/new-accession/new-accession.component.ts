import { Component, OnInit, OnChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../../services/data.service';
import { EmphesizeFirstCharecter } from '../../pipes/emphesize-first-charecter.pipe';

@Component({
  selector: 'app-new-accession',
  templateUrl: './new-accession.component.html',
  styleUrls: ['./new-accession.component.css']
})
export class NewAccessionComponent implements OnInit, OnChanges {

  public header: string;
  public title: string;
  public subTitle: string;
  public alert: string;
  public tests: Array<string>;
  public resources = environment.resources;
  public stage: number;
  public accession: any;

  constructor(private service: DataService, private pipe: EmphesizeFirstCharecter) { }

  ngOnInit() {
    this.stage = 0;
    this.accession = {};
    this.header = this.resources.createNewAccessionHeader;
    this.service.getLookupValues('testTypes').then(res => this.tests = res);
    this.initializeComponent();
  }

  ngOnChanges(): void {
    this.initializeComponent();
  }

  initializeComponent() {
    switch (this.stage) {
      case 0:
        this.title = this.resources.patientsInProgress;
        this.subTitle = this.resources.noData;
        break;
      case 1:
        this.title = this.resources.newRequisitionForm;
        this.subTitle = '';
        break;
      case 2:
        this.title = `${this.resources.newRequisitionForm}<div class="sub-title">${this.resources.asterisk}${this.resources.requiredFields}</div>`;
        this.subTitle = this.pipe.transform(this.accession.orderdTest);
        break;
    }
  }

  createNewAccesion() {
    this.stage = 1;
    this.service.createNewAccession().then(id => {
      this.accession.id = id;
      this.alert = `${this.resources.uniqueIdSavedAlertStart} (${this.accession.id}) ${this.resources.uniqueIdSavedAlertEnd}`;
      this.initializeComponent();
    });
  }

  onTestSelected(value: string) {
    this.stage = 2;
    this.accession.orderdTest = value;
    this.initializeComponent();
  }

  onAlertClosed() {

  }
}
