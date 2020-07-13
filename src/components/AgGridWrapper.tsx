import React from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";

interface AgGridWrapperProps extends AgGridReactProps {
  style?: any
}

export function AgGridWrapper({ style, ...props }: AgGridWrapperProps) {
  return (
    <div
      className="ag-theme-balham"
      style={{ ...style, height: 400, maxWidth: '100%' }}
    >
      <AgGridReact {...props} />
    </div>
  );
};