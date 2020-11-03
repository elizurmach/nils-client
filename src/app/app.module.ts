import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule, MatButtonModule, MatToolbarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSelectModule, MatAutocompleteModule, MatInputModule, MatTabsModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatCheckboxModule } from '@angular/material';
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
    LoginFormComponent
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
    MatCheckboxModule
  ],
  providers: [EmphesizeFirstCharecter],
  bootstrap: [AppComponent]
})
export class AppModule { }
