import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-new-accession',
  templateUrl: './new-accession.component.html',
  styleUrls: ['./new-accession.component.css']
})
export class NewAccessionComponent implements OnInit, OnChanges {

  public header: string;
  public title: string;
  public subTitle: string;
  public accessionId: number;
  public alert: string;
  public resources = environment.resources;
  public stage: number;

  constructor(private service: DataService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.stage = 0;
    this.initializeComponent();
  }

  ngOnChanges(): void {
    this.initializeComponent();
  }

  initializeComponent() {
    this.header = this.resources.createNewAccessionHeader;
    switch (this.stage) {
      case 0:
        this.title = this.resources.patientsInProgress;
        this.subTitle = this.resources.noData;
        break;
      case 1:
        break
    }
  }

  createNewAccesionClick() {
    this.stage = 1;
    this.service.createNewAccession().then(id => {
      this.accessionId = id;
      this.alert = `${this.resources.uniqueIdSavedAlertStart} (${this.accessionId}) ${this.resources.uniqueIdSavedAlertEnd}`;
      this.changeDetector.detectChanges();
    });
  }
}
