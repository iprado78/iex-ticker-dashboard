import React from "react";
import { AgGridWrapper } from "./AgGridWrapper";
import { Price } from "../types";
import { intradayColDef, intradayDefaultColDef } from "../constants";
import { pricesToGrid } from "../functions";

interface IntradayGridProps {
  intradayPrices: Price[]
}
export function IntradayGrid({
  intradayPrices
}: IntradayGridProps) {
  return (
    <AgGridWrapper
      columnDefs={intradayColDef}
      defaultColDef={intradayDefaultColDef}
      rowData={pricesToGrid(intradayPrices)}
    />
  );
};