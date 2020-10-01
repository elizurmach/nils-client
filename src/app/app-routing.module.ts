import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SamplesComponent } from './components/samples/samples.component';
import { NewAccessionComponent } from './components/new-accession/new-accession.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'new-accession', component: NewAccessionComponent},
  { path: 'samples', component: SamplesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
