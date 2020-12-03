import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject, NgZone } from '@angular/core';

@Component({
  selector: 'app-nx-input-dialog',
  templateUrl: './nx-input-dialog.component.html',
  styleUrls: ['./nx-input-dialog.component.css']
})
export class NxInputDialogComponent {

  constructor(private nxConfirmDialog: MatDialogRef<NxInputDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data: {
       title?: string,
       body?: string,
       confirmText?: string,
       confirmIcon?: string,
       cancelText?: string,
       cancelIcon?: string,
       input?: string
      }, private zone: NgZone) { }

  onDismiss(): void {
    // Close the dialog, return false
    this.zone.run(() => {
      this.nxConfirmDialog.close(false);
    });
  }
}
