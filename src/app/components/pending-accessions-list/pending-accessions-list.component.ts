import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pending-accessions-list',
  templateUrl: './pending-accessions-list.component.html',
  styleUrls: ['./pending-accessions-list.component.css']
})
export class PendingAccessionsListComponent implements OnInit {

  public resources = environment.resources;

  constructor() { }

  ngOnInit() {
  }

}
