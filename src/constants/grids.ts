import { ColDef } from "ag-grid-community";

const allDefaults: ColDef = {
  sortable: true,
};

export const intradayDefaultColDef: ColDef = {
  ...allDefaults,
  width: 125,
};

const baseColDef: ColDef[] = [
  {
    headerName: 'Open',
    field: 'open',
  },
  {
    headerName: 'Close',
    field: 'close',
  },
  {
    headerName: 'Change (Bps)',
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
    headerName: 'Range (Bps)',
    field: 'range',
  },
  {
    headerName: 'Volume',
    field: 'volume'
  }

];

export const intradayColDef: ColDef[] = [
  {
    headerName: 'Time',
    field: 'datetime',
  },
  ...baseColDef,
];

export const historicalDefaultColDef: ColDef = intradayDefaultColDef;

export const historicalColDef: ColDef[] = [
  {
    headerName: 'Date',
    field: 'datetime',
  },
  ...baseColDef,
];