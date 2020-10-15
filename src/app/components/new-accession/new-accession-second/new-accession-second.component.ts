import { Component, OnInit, Output, EventEmitter, Input, ElementRef} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-accession-second',
  templateUrl: './new-accession-second.component.html',
  styleUrls: ['./new-accession-second.component.css']
})
export class NewAccessionSecondComponent implements OnInit {

  @Input() options: Array<string>;
  @Output() testSelected = new EventEmitter<string>();
  public resources = environment.resources;

  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

  onTestSelected($event) {
    this.testSelected.emit($event.value);
  }
}
