import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-alert',
  templateUrl: './footer-alert.component.html',
  styleUrls: ['./footer-alert.component.css']
})
export class FooterAlertComponent implements OnInit {

  @Input() level: "ok" | "warning" | "error" = "ok";
  @Input() message: string;
  public classes: string;

  public show: boolean = true;

  constructor() { }

  ngOnInit() {
    this.classes = `footer-alert ${this.level}`
  }

  onCloseClick() {
    this.show = false;
  }
}
