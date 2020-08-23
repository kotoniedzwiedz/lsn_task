import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { User } from '../../models/user/user';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TableConfig, ColumnFilterType } from '../../models/table/table-config-model';
import { UserRole } from '../../models/user/user-role';
import { AngularMaterialModule } from 'src/app/angular-material.module';

describe('Component:: TableComponent <for USER>', () => {
    let component: TableComponent<User>;
    let fixture: ComponentFixture<TableComponent<User>>;
    const users = [
        new User({
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
        })
    ];
    const tableConfig: TableConfig = {
        searchByAllColumns: true,
        columns: [
            {
                columnName: 'Username', columnKey: 'username',
                filterConfig: {
                    isFiltered: true,
                    filterType: ColumnFilterType.TEXT
                }
            },
            { columnName: 'First Name', columnKey: 'firstName' },
            { columnName: 'Last Name', columnKey: 'lastName' },
            {
                columnName: 'Role', columnKey: 'role',
                filterConfig: {
                    isFiltered: true,
                    filterType: ColumnFilterType.SELECT, options: [UserRole.ADMIN, UserRole.USER]
                }
            },
        ],
        pagination: {
            showPagination: true,
            pageSizeOptions: [15, 10, 5],
            showFirstLastButtons: false
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AngularMaterialModule],
            declarations: [TableComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent<TableComponent<User>>(TableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.tableConfig = tableConfig;
        component.data = users;
        component.ngOnChanges();
    });

    it('should create with correct data', () => {

        expect(component.dataSource.data.length).toEqual(2);
        expect(component.displayedColumns.length).toEqual(4);
        expect(component.tableConfig.pagination.pageSizeOptions).toEqual([15, 10, 5]);
        expect(component).toBeTruthy();
    });

    it('should filter datasource by proper value', () => {
        component.setupFilter('username');
        component.filterDataSource('Jan');

        expect(component.dataSource.filteredData.length).toEqual(1);
    });

    it('should filter datasource by select value', () => {
        component.setupFilter('role');
        const event = {
            isUserInput: true,
            source: {
                value: UserRole.USER
            }
        };
        component.selectFilterChange(event);

        expect(component.dataSource.filteredData.length).toEqual(0);
    });
});
