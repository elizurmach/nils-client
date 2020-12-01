import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule, MatButtonModule, MatToolbarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSelectModule, MatAutocompleteModule, MatInputModule, MatTabsModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatCheckboxModule, MatProgressBarModule, MatStepperModule, MatRadioModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DateFormatPipe } from './pipes/date-format.pipe';
import { EmphesizeFirstCharecter } from './pipes/emphesize-first-charecter.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavigationMenuComponent } from './components/side-navigation-menu/side-navigation-menu.component';
import { NavigationLinksComponent } from './components/side-navigation-menu/navigation-links/navigation-links.component';
import { NxFormModule } from './components/controls/nx-dynamic-form/nx-dynamic-form.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SamplesComponent } from './components/samples/samples.component';
import { NewAccessionComponent } from './components/new-accession/new-accession.component';
import { PendingAccessionsListComponent } from './components/pending-accessions-list/pending-accessions-list.component';
import { FooterAlertComponent } from './components/controls/footer-alert/footer-alert.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RequisitionFormComponent } from './components/requisition-form/requisition-form.component';
import { PatientReportComponent } from './components/reports/patient-report/patient-report.component';
import { PendingReportsListComponent } from './components/pending-reports-list/pending-reports-list.component';
import { PatientInformationComponent } from './components/requisition-form/patient-information/patient-information.component';
import { HealthcareProviderInformationComponent } from './components/requisition-form/healthcare-provider-information/healthcare-provider-information.component';
import { SpecimenInformationComponent } from './components/requisition-form/specimen-information/specimen-information.component';
import { BillingInformationComponent } from './components/requisition-form/billing-information/billing-information.component';
import { NxInputDialogComponent } from './components/controls/nx-input-dilog/nx-input-dialog.component';
import { NxSeparateDigitInputComponent } from './components/controls/nx-separate-digit-input/nx-separate-digit-input.component';
import { NxCustomDateInputComponent } from './components/controls/nx-custom-date-input/nx-custom-date-input.component';
import { NxStepContentComponent } from './components/controls/nx-step-content/nx-step-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationMenuComponent,
    DateFormatPipe,
    EmphesizeFirstCharecter,
    NavigationLinksComponent,
    HomePageComponent,
    SamplesComponent,
    NewAccessionComponent,
    PendingAccessionsListComponent,
    FooterAlertComponent,
    LoginFormComponent,
    RequisitionFormComponent,
    PatientReportComponent,
    PendingReportsListComponent,
    PatientInformationComponent,
    HealthcareProviderInformationComponent,
    SpecimenInformationComponent,
    BillingInformationComponent,
    NxInputDialogComponent,
    NxSeparateDigitInputComponent,
    NxCustomDateInputComponent,
    NxStepContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NxFormModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTabsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatStepperModule,
    MatRadioModule
  ],
  providers: [EmphesizeFirstCharecter],
  bootstrap: [AppComponent],
  entryComponents: [
    NxInputDialogComponent
  ]
})
export class AppModule { }
