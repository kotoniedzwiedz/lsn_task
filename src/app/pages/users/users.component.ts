import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { UserInterface } from 'src/app/shared/models/user/user-model';
import { Subscription } from 'rxjs';
import { TableConfig, ColumnFilterType, ColumnType } from 'src/app/shared/models/table/table-config-model';
import { UserRole } from 'src/app/shared/models/user/user-role';
import { UserService } from 'src/app/shared/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogData } from 'src/app/shared/models/confirmation-dialog-data';
import { ConfirmationDialogComponent } from 'src/app/shared/components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { UserHelperService } from './../../shared/services/user-helper.service';
import { UserAddEditDialogComponentData } from 'src/app/shared/models/user-add-edit-dialog-data';
import { UserAddEditDialogComponent } from './../../shared/components/dialogs/user-add-edit-dialog/user-add-edit-dialog.component';
import { User } from 'src/app/shared/models/user/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  @ViewChild(TableComponent, { static: false }) appTable: TableComponent<User>;

  tableConfig: TableConfig = {
    searchByAllColumns: true,
    searchByAllColumnsMethod: (value) => this.userService.filterUserData(value),
    columns: [
      {
        columnName: 'Username', columnKey: 'username', columnType: ColumnType.TEXT,
        filterConfig: {
          isFiltered: true,
          filterType: ColumnFilterType.TEXT
        }
      },
      { columnName: 'First Name', columnKey: 'firstName', columnType: ColumnType.TEXT },
      { columnName: 'Last Name', columnKey: 'lastName', columnType: ColumnType.TEXT },
      {
        columnName: 'Role', columnKey: 'role', columnType: ColumnType.SELECT,
        filterConfig: {
          isFiltered: true,
          filterType: ColumnFilterType.SELECT, options: [UserRole.ADMIN, UserRole.USER]
        }
      },
      {
        columnName: 'Enabled', columnKey: 'enabled', columnType: ColumnType.BOOLEAN
      },
      {
        columnName: 'Actions', columnKey: 'actions', columnType: ColumnType.ACTIONS,
        actions: [
          { displayName: 'Delete', method: (user: User) => this.deleteUser(user) },
          { displayName: 'Edit', method: (user: User) => this.editUser(user) },
        ]
      }
    ],
    pagination: {
      showPagination: true,
      pageSizeOptions: [15, 10, 5],
      showFirstLastButtons: false
    }
  };

  private userDataSubscription: Subscription;
  dataSource: User[];

  constructor(
    private userService: UserService,
    private matDialog: MatDialog,
  ) { }

  ngOnInit() {
    this.loadData();
  }

  addNewUser() {
    const formData = UserHelperService.getUserAddEditForm();
    const dialogData = new UserAddEditDialogComponentData('Add user', formData);
    const addDialogRef = this.matDialog.open(UserAddEditDialogComponent, { data: dialogData });
    addDialogRef.afterClosed().subscribe(positiveResponse => {
      if (positiveResponse) {
        const newUser = new User(formData.value);
        this.userService.addUser(newUser);
      }
    });
  }

  deleteUser(user: User) {
    const dialogData = new ConfirmationDialogData('Confirm delete', `Are you sure you want to remove ${user.username}?`);
    const confirmationDialogRef = this.matDialog.open(ConfirmationDialogComponent, { data: dialogData });
    confirmationDialogRef.afterClosed().subscribe(positiveResponse => {
      if (positiveResponse) {
        this.userService.deleteUser(user);
      }
    });
  }

  editUser(user: User) {
    const formData = UserHelperService.getUserAddEditForm(user);
    const dialogData = new UserAddEditDialogComponentData('Edit user', formData);
    const editDialogRef = this.matDialog.open(UserAddEditDialogComponent, { data: dialogData });
    editDialogRef.afterClosed().subscribe(positiveResponse => {
      if (positiveResponse) {
        this.userService.updateUser(formData.value, user);
      }
    });
  }

  ngOnDestroy() {
    this.userDataSubscription.unsubscribe();
  }

  private loadData() {
    this.userDataSubscription = this.userService.getUsers().subscribe(data => {
      this.dataSource = data;
    });
  }

}
