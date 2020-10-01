import { Component, OnInit, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-side-navigation-menu',
  templateUrl: './side-navigation-menu.component.html',
  styleUrls: ['./side-navigation-menu.component.css']
})
export class SideNavigationMenuComponent implements OnInit {

  public resources = environment.resources;
  public userName: string;
  public lastLogin: Date;

  private element: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.userName = 'Tal Gadish';
    this.lastLogin = new Date();
    this.element = this.elementRef.nativeElement.querySelector('.side-nav-menu');
  }

  tougleExpand() {
    if (this.element.classList.contains('compressed'))
      this.element.classList.remove('compressed');
    else
      this.element.classList.add('compressed');
  }

  navLinks = [
    { label: this.resources.patientAccessioning, path: 'new-accession', imgPath: '/assets/images/icons/patient.svg' },
    { label: this.resources.samples, path: 'samples', imgPath: '/assets/images/icons/samples.svg' },
    { label: this.resources.audit, path: 'audit', imgPath: '/assets/images/icons/audit.svg' },
    { label: this.resources.sampleStatus, path: 'sampleStatus', imgPath: '/assets/images/icons/tracking.svg' },
    { label: this.resources.labDirectorReport, path: 'labDirectorReport', imgPath: '/assets/images/icons/report.svg' }
  ];
}
