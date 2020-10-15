import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-accession-first',
  templateUrl: './new-accession-first.component.html',
  styleUrls: ['./new-accession-first.component.css']
})
export class NewAccessionFirstComponent implements OnInit {

  @Output() CreateAccassion = new EventEmitter();
  public resources = environment.resources;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.CreateAccassion.emit();
  }
}
