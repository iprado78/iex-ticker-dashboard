import React from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";

export function AgGridWrapper(props: AgGridReactProps) {
  return (
    <div
      className="ag-theme-balham"
      style={{ height: 400, width: '100%' }}
    >
      <AgGridReact {...props} />
    </div>
  );
};