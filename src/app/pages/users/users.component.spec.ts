import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { BehaviorSubject, of, EMPTY } from 'rxjs';
import { User } from 'src/app/shared/models/user/user';
import { UserService } from 'src/app/shared/services/user.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserRole } from 'src/app/shared/models/user/user-role';
import { UserHelperService } from 'src/app/shared/services/user-helper.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

class UserServiceStub {
  fakeUsersSubject = new BehaviorSubject<User[]>(null);
  getUsers() { return of(EMPTY); }
  addUser() { }
  deleteUser() { }
  updateUser() { }
  filterUserData() { }
}
class MatDialogStub {
  open() {
    return {
      afterClosed: () => of(EMPTY)
    };
  }
}

describe('Component:: UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userService: UserService;
  let matDialog: MatDialog;

  const users = [new User({
    username: 'Reggie',
    firstName: 'Giles',
    lastName: 'Langham',
    role: UserRole.ADMIN,
    enabled: false
  }),
  new User({
    username: 'Janaye',
    firstName: 'Vlad',
    lastName: 'Le Monnier',
    role: UserRole.ADMIN,
    enabled: false
  })];

  const userToTest = new User({
    username: 'Test',
    firstName: 'Test',
    lastName: 'Test',
    role: UserRole.ADMIN,
    enabled: false
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [
        { provide: UserService, useClass: UserServiceStub },
        { provide: MatDialog, useClass: MatDialogStub },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.get(UserService);
    matDialog = TestBed.get(MatDialog);

    spyOn(userService, 'getUsers').and.returnValue(of(users));

    component.ngOnInit();
  });

  it('should init with correct data', () => {
    expect(component).toBeTruthy();
    expect(userService.getUsers).toHaveBeenCalledTimes(1);
    expect(component.dataSource.length).toEqual(2);
    expect(component.dataSource[1].username).toContain('Janaye');
  });

  it('should call addUser method in service after dialog close', () => {
    const modalOpenSpy = spyOn(matDialog, 'open').and.callFake(() => {
      return {
        afterClosed: () => of(true)
      } as any;
    });
    spyOn(UserHelperService, 'getUserAddEditForm').and.returnValue(new FormGroup({
      username: new FormControl('Test', { validators: Validators.required }),
      firstName: new FormControl('Test', { validators: Validators.required }),
      lastName: new FormControl('Test', { validators: Validators.required }),
      role: new FormControl(UserRole.ADMIN, { validators: Validators.required }),
      enabled: new FormControl(false, { validators: Validators.required }),
    }));
    spyOn(userService, 'addUser').withArgs(userToTest);

    component.addNewUser();

    expect(userService.addUser).toHaveBeenCalledTimes(1);
    expect(userService.addUser).toHaveBeenCalledWith(userToTest);
  });

  it('should not call addUser method in service after dialog close', () => {
    const modalOpenSpy = spyOn(matDialog, 'open').and.callFake(() => {
      return {
        afterClosed: () => of(false)
      } as any;
    });
    spyOn(userService, 'addUser').withArgs(userToTest);

    component.addNewUser();

    expect(userService.addUser).toHaveBeenCalledTimes(0);
  });

  it('should call updateUser method in service after dialog close', () => {
    const modalOpenSpy = spyOn(matDialog, 'open').and.callFake(() => {
      return {
        afterClosed: () => of(true)
      } as any;
    });
    const updatedUser = {
      username: 'Test',
      firstName: 'Test',
      lastName: 'Test',
      role: UserRole.ADMIN,
      enabled: false
    };
    spyOn(UserHelperService, 'getUserAddEditForm').and.returnValue(new FormGroup({
      username: new FormControl('Test', { validators: Validators.required }),
      firstName: new FormControl('Test', { validators: Validators.required }),
      lastName: new FormControl('Test', { validators: Validators.required }),
      role: new FormControl(UserRole.ADMIN, { validators: Validators.required }),
      enabled: new FormControl(false, { validators: Validators.required }),
    }));
    spyOn(userService, 'updateUser').withArgs(updatedUser, component.dataSource[0]);

    component.editUser(component.dataSource[0]);

    expect(userService.updateUser).toHaveBeenCalledTimes(1);
    expect(userService.updateUser).toHaveBeenCalledWith(updatedUser, component.dataSource[0]);
  });

  it('should not call updateUser method in service after dialog close', () => {
    const modalOpenSpy = spyOn(matDialog, 'open').and.callFake(() => {
      return {
        afterClosed: () => of(false)
      } as any;
    });
    spyOn(userService, 'updateUser').withArgs(userToTest);

    component.editUser(userToTest);

    expect(userService.updateUser).toHaveBeenCalledTimes(0);
  });

  it('should call delete method in service after dialog close', () => {
    const modalOpenSpy = spyOn(matDialog, 'open').and.callFake(() => {
      return {
        afterClosed: () => of(true)
      } as any;
    });
    spyOn(userService, 'deleteUser').withArgs(component.dataSource[0]);

    component.deleteUser(component.dataSource[0]);

    expect(userService.deleteUser).toHaveBeenCalledTimes(1);
    expect(userService.deleteUser).toHaveBeenCalledWith(component.dataSource[0]);
  });

  it('should not call delete method in service after dialog close', () => {
    const modalOpenSpy = spyOn(matDialog, 'open').and.callFake(() => {
      return {
        afterClosed: () => of(false)
      } as any;
    });
    spyOn(userService, 'deleteUser').withArgs(component.dataSource[0]);

    component.deleteUser(component.dataSource[0]);

    expect(userService.deleteUser).toHaveBeenCalledTimes(0);
  });
});
