import React from "react";
import { AgGridWrapper } from "./AgGridWrapper";
import { Price } from "../types";
import { historicalColDef, historicalDefaultColDef } from "../constants";
import { pricesToGrid } from "../functions";

interface HistoricalGridProps {
  historicalPrices: Price[]
}
export function HistoricalGrid({
  historicalPrices
}: HistoricalGridProps) {
  return (
    <AgGridWrapper
      columnDefs={historicalColDef}
      defaultColDef={historicalDefaultColDef}
      rowData={pricesToGrid(historicalPrices)}
    />
  );
};