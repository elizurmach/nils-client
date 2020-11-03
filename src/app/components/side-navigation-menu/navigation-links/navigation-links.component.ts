import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.component.html',
  styleUrls: ['./navigation-links.component.css']
})
export class NavigationLinksComponent implements OnInit {
  @Input() navLinks: Array<{ label: string, path:string, icon?:string }>;

  constructor() { }

  ngOnInit() {
  }

}
