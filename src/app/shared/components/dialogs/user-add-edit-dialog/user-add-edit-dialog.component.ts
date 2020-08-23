import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserAddEditDialogComponentData } from 'src/app/shared/models/user-add-edit-dialog-data';
import { FormGroup } from '@angular/forms';
import { UserRole } from 'src/app/shared/models/user/user-role';

@Component({
  selector: 'app-user-add-edit-dialog',
  templateUrl: './user-add-edit-dialog.component.html',
  styleUrls: ['./user-add-edit-dialog.component.scss']
})
export class UserAddEditDialogComponent {

  title = '';
  form: FormGroup;
  roleOptions = [UserRole.ADMIN, UserRole.USER];

  constructor(
    public dialogRef: MatDialogRef<UserAddEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserAddEditDialogComponentData
  ) {
    this.title = data.title;
    this.form = data.form;
  }

  cancel() {
    this.dialogRef.close(false);
  }

  onSubmit() {
    if (this.form.valid) {
      this.dialogRef.close(true);
    }
  }

}
