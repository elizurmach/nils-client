import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer-alert',
  templateUrl: './footer-alert.component.html',
  styleUrls: ['./footer-alert.component.css']
})
export class FooterAlertComponent implements OnInit {

  @Input() level: "ok" | "warning" | "error" = "ok";
  @Input() message: string;
  @Input() autoClose?: number;
  @Output() onClose = new EventEmitter();

  public classes: string;
  public show: boolean = true;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.classes = `footer-alert ${this.level} ${this.autoClose? 'fade-out': ''}`;
    if (this.autoClose) {

      setTimeout(() => this.onCloseClick(), this.autoClose * 1000);
    }
  }

  onCloseClick() {
    this.show = false;
    this.onClose.emit();
  }
}
