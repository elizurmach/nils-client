import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject, NgZone } from '@angular/core';

@Component({
  selector: 'app-nx-confirm-dialog',
  templateUrl: './nx-confirm-dialog.component.html',
  styleUrls: ['./nx-confirm-dialog.component.css']
})
export class NxConfirmDialogComponent {

  constructor(private nxConfirmDialog: MatDialogRef<NxConfirmDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data: {
       title?: string,
       body?: string,
       confirmText?: string,
       confirmIcon?: string,
       cancelText?: string,
       cancelIcon?: string
      }, private zone: NgZone) { }

  close() {
    this.zone.run(() => {
      this.nxConfirmDialog.close(false);
    });
  }

  confirmSelect(): void {
    // Close the dialog, return 2
    this.zone.run(() => {
      this.nxConfirmDialog.close(2);
    });
  }

  cancelSelect(): void {
    // Close the dialog, return 1
    this.zone.run(() => {
      this.nxConfirmDialog.close(1);
    });
  }
}
