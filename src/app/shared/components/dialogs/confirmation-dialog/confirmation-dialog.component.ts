import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogData } from 'src/app/shared/models/confirmation-dialog-data';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

  title: string;
  messageText: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData
  ) {
    this.title = data.title;
    this.messageText = data.messageText;
  }

  confirm() {
    this.dialogRef.close(true);
  }

  reject() {
    this.dialogRef.close(false);
  }

}
