import React from "react";
import { AgGridWrapper } from "./AgGridWrapper";
import { Price } from "../types";
import { defaultColDef, colDef } from "../constants";
import { pricesToGrid } from "../functions";

interface PriceDataGridProps {
  historicalPrices: Price[],
  style?: any,
}
export function PriceDataGrid({
  historicalPrices,
  style
}: PriceDataGridProps) {
  return (
    <AgGridWrapper
      style={style}
      suppressMenuHide
      columnDefs={colDef}
      defaultColDef={defaultColDef}
      rowData={pricesToGrid(historicalPrices)}
    />
  );
};