import React from "react";
import { AgGridWrapper } from "./AgGridWrapper";
import { Price } from "../types";
import { defaultColDef, colDef } from "../constants";
import { pricesToGrid } from "../functions";

interface PriceDataGridProps {
  historicalPrices: Price[],
}
export function PriceDataGrid({
  historicalPrices
}: PriceDataGridProps) {
  return (
    <AgGridWrapper
      columnDefs={colDef}
      defaultColDef={defaultColDef}
      rowData={pricesToGrid(historicalPrices)}
    />
  );
};