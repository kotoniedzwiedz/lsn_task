import { Component, Input, ViewChild, OnChanges, AfterViewInit, HostListener, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnFilterType, TableConfig } from '../../models/table/table-config-model';
import * as _ from 'lodash';
import { MatOptionSelectionChange } from '@angular/material/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnChanges, AfterViewInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  @Input() tableConfig: TableConfig;
  @Input() data: T[];

  ColumnFilterType = ColumnFilterType;
  displayedColumns: string[];
  dataSource: MatTableDataSource<T>;

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<T>(this.data);
    this.displayedColumns = this.tableConfig.columns.map(col => col.columnName);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }

  setupFilter(columnKey: string) {
    this.dataSource.filterPredicate = (d, filter: string) => {
      const textToSearch = d[columnKey] && d[columnKey].toLowerCase() || '';
      return textToSearch.indexOf(filter) !== -1;
    };
  }

  filterDataSource(value) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  selectFilterChange(event) {
    if (event.isUserInput) {
      this.filterDataSource(event.source.value);
    }
  }

}
