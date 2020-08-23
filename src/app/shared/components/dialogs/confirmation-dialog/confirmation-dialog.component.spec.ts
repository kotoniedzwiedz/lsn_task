import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Component:: ConfirmationDialogComponent', () => {
  let component: ConfirmationDialogComponent;
  let fixture: ComponentFixture<ConfirmationDialogComponent>;

  const matDialogStub = {
    close: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: matDialogStub },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog on confirm', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.confirm();

    expect(spy).toHaveBeenCalledWith(true);
  });

  it('should close dialog on reject', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.reject();

    expect(spy).toHaveBeenCalledWith(false);
  });

});
