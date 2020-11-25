import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SamplesComponent } from './components/samples/samples.component';
import { NewAccessionComponent } from './components/new-accession/new-accession.component';
import { PendingAccessionsListComponent } from './components/pending-accessions-list/pending-accessions-list.component';
import { RequisitionFormComponent } from './components/requisition-form/requisition-form.component';
import { PatientReportComponent } from './components/reports/patient-report/patient-report.component';
import { PendingReportsListComponent } from './components/pending-reports-list/pending-reports-list.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'new-accession', component: NewAccessionComponent },
  { path: 'pending-accessions-list', component: PendingAccessionsListComponent },
  { path: 'requisition-form/:id', component: RequisitionFormComponent },
  { path: 'samples', component: SamplesComponent },
  { path: 'patient-report/:id', component: PatientReportComponent },
  { path: 'pending-reports-list', component: PendingReportsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
