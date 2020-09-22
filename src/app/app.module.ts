import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule, MatButtonModule, MatToolbarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSelectModule, MatAutocompleteModule, MatInputModule, MatTabsModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DateFormatPipe } from './pipes/date-format-pipe.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavigationMenuComponent } from './components/side-navigation-menu/side-navigation-menu.component';
import { NavigationLinksComponent } from './components/side-navigation-menu/navigation-links/navigation-links.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SamplesComponent } from './components/samples/samples.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationMenuComponent,
    DateFormatPipe,
    NavigationLinksComponent,
    HomePageComponent,
    SamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
