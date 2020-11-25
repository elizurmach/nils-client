import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { reportResources as resources } from 'src/assets/resources/report-resources';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PatientReportRecord } from 'src/app/model/report';
import { MatDialog } from '@angular/material';
import { NxInputDialogComponent } from '../../controls/nx-input-dilog/nx-input-dialog.component';

@Component({
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  styleUrls: ['./patient-report.component.css']
})
export class PatientReportComponent implements OnInit {

  private id: number;

  private url: string = 'http://nilspocdataservice-env.eba-2hygmmn6.us-west-2.elasticbeanstalk.com/accessions/reportData/';
  title = 'nils-patient-report';
  resources = resources;
  public reportRecord: PatientReportRecord;

  constructor(private route: ActivatedRoute, private http: HttpClient, private changeDetector: ChangeDetectorRef, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.getReportById(this.id).subscribe((res) => {
      console.log('subscribed');
      this.reportRecord = res;
      this.changeDetector.detectChanges();
    });
    console.log('this is the end of gogo');
  }

  public getReportById(id: number): Observable<PatientReportRecord> {
    console.log('getReportById');
    return this.http
      .get<any>(this.url + id)
      .pipe(map((res) => this.mapDbObjToReportRecord(res.accessionReportData[0])));
  }

  private mapDbObjToReportRecord(dbObj: any): PatientReportRecord {
    return {
      id: dbObj['ID'],
      accessionId: dbObj['ACCESSION_ID'],
      firstName: dbObj['FIRST_NAME'],
      lastName: dbObj['LAST_NAME'],
      birthDate: new Date(dbObj['BIRTH_DATE']).toISOString(),
      ageInYears: new Date().getFullYear() - new Date(dbObj['BIRTH_DATE']).getFullYear(),
      medicalRecordNumber: dbObj['MRN'],
      gender: dbObj['GENDER'],
      referringPhysician: dbObj['REFERRING_PHYSICIAN'],
      sourceInstitute: dbObj['SOURCE_INSTITUTE'],
      icdCode: dbObj['ICD_CODE'],
      sampleType: dbObj['SAMPLE_TYPE'],
      collectionDate: new Date(dbObj['COLLECTION_DATE']).toISOString(),
      arrivalDate: new Date(dbObj['ARRIVAL_DATE']).toISOString(),
      testType: dbObj['TEST_TYPE'],
      epiScore: dbObj['EPISCORE'],
      interpretation: dbObj['INTERPRETATION'],
      testDate: new Date(dbObj['TEST_DATE']).toISOString(),
      reference:
        new String(dbObj['INTERPRETATION']).toUpperCase() === 'POSITIVE'
          ? resources.testResults.negative
          : resources.testResults.positive,
      phoneNumber: dbObj['PHONE_NUMBER'],
      labDirectorName: dbObj['LAB_DIRECTOR'],
      labDirectorSignature: null, //dbObj['SIGNATURE_URL'],
      comments: dbObj['COMMENTS ']

    } as PatientReportRecord;
  }

  addSignitureClick() {
    const dialogRef = this.dialog.open(NxInputDialogComponent, {
      panelClass: 'custom-dialog-container',
      data: { title: '', body: '', confirmText: '', cancelText: '' }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.reportRecord.labDirectorSignature = 'https://nils-resources.s3-us-west-2.amazonaws.com/signatures/QATesting_sig.svg';
      }
    });
  }
}

