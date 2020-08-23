import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddEditDialogComponent } from './user-add-edit-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

describe('Component:: UserAddEditDialogComponent', () => {
  let component: UserAddEditDialogComponent;
  let fixture: ComponentFixture<UserAddEditDialogComponent>;

  const matDialogStub = {
    close: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserAddEditDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: matDialogStub },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog on submit when form is valid', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.form = new FormGroup({
      username: new FormControl('Test', { validators: Validators.required }),
    });
    component.onSubmit();

    expect(spy).toHaveBeenCalledWith(true);
  });

  it('should not close dialog on submit when form is invalid', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.form = new FormGroup({
      username: new FormControl('', { validators: Validators.required }),
    });

    component.onSubmit();

    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should close dialog on cancel', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.cancel();

    expect(spy).toHaveBeenCalledWith(false);
  });
});
