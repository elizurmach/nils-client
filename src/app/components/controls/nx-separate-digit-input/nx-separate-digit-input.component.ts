import { Component, OnInit, Input, EventEmitter, Output, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-nx-separate-digit-input',
  templateUrl: './nx-separate-digit-input.component.html',
  styleUrls: ['./nx-separate-digit-input.component.css']
})
export class NxSeparateDigitInputComponent implements OnInit, AfterViewInit {

  @Input() length: number;
  @Input() value?: number;
  @Input() hint?: string;

  @Output() change = new EventEmitter<number>()

  public arr: Array<any>;
  private inputs: HTMLInputElement[];

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.arr = new Array(Number(this.length));
  }

  ngAfterViewInit(): void {
    this.inputs = this.element.nativeElement.querySelectorAll('input');
    for (let i = 0; i < this.inputs.length; i++) {
      this.setInputFilter(this.inputs[i], this.inputFilter);
      if (this.value || this.value === 0) {
        this.setValue(i);
      }
    }
  }

  keyUp(event: any): void {
    let element = event.srcElement;
    this.updateValue();
    if (element.value) {
      let next = element.closest('.digit').nextElementSibling;
      if (next) {
        next.firstElementChild.focus();
      }
    }
  }

  private updateValue():void {
    let temp = 0;
    let changed = false;
    for (let i = 0; i < this.inputs.length; i++) {
      if (this.inputs[i]['value']) {
        temp += Number(this.inputs[i]['value']) * Math.pow(10, this.length - (i + 1));
        changed = true;
      }
    }
    if (changed && temp != this.value) {
      this.value = temp;
      this.change.emit(this.value);
    }
  }

  private setInputFilter(textbox: Element, inputFilter: (value: string) => boolean): void {
    ["input", "keyup", "select", "contextmenu", "drop"].forEach(function (event) {
      textbox.addEventListener(event, function (this: (HTMLInputElement | HTMLTextAreaElement) & { oldValue: string; oldSelectionStart: number | null, oldSelectionEnd: number | null }) {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (Object.prototype.hasOwnProperty.call(this, 'oldValue')) {
          this.value = this.oldValue;
          if (this.oldSelectionStart !== null &&
            this.oldSelectionEnd !== null) {
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
          }
        } else {
          this.value = "";
        }
      });
    });
  }

  private inputFilter(value: string): boolean {
    return (!isNaN(Number(value)));
  }

  focusOut(): void {
    let self = this;
    setTimeout(function () {
      let stillInFocus = false;
      for (let i = 0; i < self.inputs.length; i++) {
        if (self.inputs[i] == document.activeElement) {
          stillInFocus = true;
          break;
        }
      }
      if (document.activeElement.tagName != 'body' && !stillInFocus && (self.value || self.value === 0)) {
        for (let i = 0; i < self.inputs.length; i++) {
          self.setValue(i);
        }
      }
    }, 10);
  }

  private setValue(index: number):void {
    this.inputs[index].setAttribute('value', (Math.floor(this.value / Math.pow(10, this.length - (index + 1)) % 10).toString()));
  }
}