export interface TableConfig {
    columns: TableColumn[];
    pagination: PaginationConfig;
    searchByAllColumns: boolean;
    searchByAllColumnsMethod?: (value: any) => void;
}

export interface PaginationConfig {
    showPagination: boolean;
    showFirstLastButtons: boolean;
    pageSizeOptions: number[];
}

export interface TableColumn {
    columnName: string;
    columnKey: string;
    actions?: TableAction[];
    filterConfig?: {
        isFiltered: boolean;
        filterType: ColumnFilterType;
        options?: string[]
    };
}

export interface TableAction {
    displayName: string;
    method: (prop: any) => void;
}

export enum ColumnFilterType {
    TEXT,
    NUMBER,
    SELECT,
    BOOLEAN
}
