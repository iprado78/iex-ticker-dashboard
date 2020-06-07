import { ColDef } from "ag-grid-community";

export const defaultColDef: ColDef = {
  sortable: true,
  width: 100,
  filter: 'agNumberColumnFilter'
};

export const colDef: ColDef[] = [
  {
    headerName: 'Date & Time',
    field: 'datetime',
    width: 200,
    filter: false
  },
  {
    headerName: 'Open',
    field: 'open',
  },
  {
    headerName: 'Close',
    field: 'close',
  },
  {
    headerName: 'Change',
    field: 'change',
  },
  {
    headerName: 'High',
    field: 'high',
  },
  {
    headerName: 'Low',
    field: 'low',
  },
  {
    headerName: 'Range',
    field: 'range',
  },
  {
    headerName: 'Volume',
    field: 'volume'
  }
];