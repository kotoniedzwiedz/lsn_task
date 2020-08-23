import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AngularMaterialModule } from './angular-material.module';
import { ConfirmationDialogComponent } from './shared/components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { UsersComponent } from './pages/users/users.component';
import { UserAddEditDialogComponent } from './shared/components/dialogs/user-add-edit-dialog/user-add-edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent, UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmationDialogComponent,
    UserAddEditDialogComponent
  ]
})
export class AppModule { }
