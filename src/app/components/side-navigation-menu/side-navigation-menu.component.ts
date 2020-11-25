import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../../model/user';

@Component({
  selector: 'app-side-navigation-menu',
  templateUrl: './side-navigation-menu.component.html',
  styleUrls: ['./side-navigation-menu.component.css']
})
export class SideNavigationMenuComponent implements OnInit {

  @Input() user: User;

  public resources = environment.resources;
  public userName: string;
  public lastLogin: Date;

  private element: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.userName = this.user.displayName ? this.user.displayName : this.user.userName;
    this.lastLogin = this.user.lastLogin;
    this.element = this.elementRef.nativeElement.querySelector('.side-nav-menu');
  }

  tougleExpand() {
    if (this.element.classList.contains('compressed'))
      this.element.classList.remove('compressed');
    else
      this.element.classList.add('compressed');
  }

  navLinks = [
    { label: this.resources.createNewAccession, path: 'new-accession' },
    { label: this.resources.pendingAccessions, path: 'pending-accessions-list' },
    { label: this.resources.QaAccession, path: 'qa-accession' },
    { label: this.resources.samples, path: 'samples' },
    { label: this.resources.audit, path: 'audit' },
    { label: this.resources.sampleStatus, path: 'sampleStatus' },
    { label: this.resources.pendingReports, path: 'pending-reports-list' },
    { label: this.resources.labDirectorReport, path: 'labDirectorReport' }
  ];
}
