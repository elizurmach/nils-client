import { Component, Input, ElementRef, AfterViewChecked } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-accession-requisition-form',
  templateUrl: './new-accession-requisition-form.component.html',
  styleUrls: ['./new-accession-requisition-form.component.css']
})

export class NewAccessionRequisitionFormComponent implements AfterViewChecked {

  @Input() accession: any;

  public resources = environment.resources;

  private idAdded: boolean = false;

  constructor(private element: ElementRef) { }

  ngAfterViewChecked(): void {
    if (this.idAdded) {
      return;
    }
    var caption = this.element.nativeElement.querySelector('.field-set-caption');
    if (caption) {
      this.idAdded = true;
      caption.innerText += ` | ${this.resources.uniqeId} (${this.accession.id})`;
    }
  }

  onSubmit($event) { }
}
