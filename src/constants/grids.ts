import { ColDef } from "ag-grid-community";

export const defaultColDef: ColDef = {
  sortable: true,
  width: 100,
  filter: 'agNumberColumnFilter',
  suppressMenu: false,
  resizable: true,
};

export const colDef: ColDef[] = [
  {
    headerName: 'Date & Time',
    field: 'datetime',
    width: 200,
    filter: false,
    type: 'dateColumn',
  },
  {
    headerName: 'Open',
    field: 'open',
    type: 'numericColumn',
  },
  {
    headerName: 'Close',
    field: 'close',
    type: 'numericColumn',
  },
  {
    headerName: 'Change',
    field: 'change',
    type: 'numericColumn',
  },
  {
    headerName: 'High',
    field: 'high',
    type: 'numericColumn',
  },
  {
    headerName: 'Low',
    field: 'low',
    type: 'numericColumn',
  },
  {
    headerName: 'Range',
    field: 'range',
    type: 'numericColumn',
  },
  {
    headerName: 'Volume',
    field: 'volume',
    type: 'numericColumn',
  }
];