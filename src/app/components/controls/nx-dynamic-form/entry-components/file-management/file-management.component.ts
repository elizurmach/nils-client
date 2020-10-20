import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../model/field-config';

@Component({
  selector: 'app-file-management',
  templateUrl: './file-management.component.html',
  styleUrls: ['./file-management.component.css']
})

export class FileManagementComponent implements OnInit {

  @Output() manage = new EventEmitter();

  field: FieldConfig;
  group: FormGroup;
  labels: Array<string>;
  icons: Array<string>;
  private list: any;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.labels = this.field.label? this.field.label.split(';') : [];
    this.icons = this.field.icon ? this.field.icon.split(';') : [];
  }

  toggleDropDown() {
    if (!this.list) {
      this.list = this.element.nativeElement.querySelector('.drop-down-list')
    }

    if (this.list.style.display == 'block') {
      this.list.style.display = 'none';
    }
    else {
      this.list.style.display = 'block';
    }
  }

  manageFiles() {
    this.manage.emit();
  }
}
