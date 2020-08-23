import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { AngularMaterialModule } from './../angular-material.module';
import { ConfirmationDialogComponent } from './components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { UserAddEditDialogComponent } from './components/dialogs/user-add-edit-dialog/user-add-edit-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TableComponent, ConfirmationDialogComponent, UserAddEditDialogComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  exports: [TableComponent]
})
export class SharedModule { }
