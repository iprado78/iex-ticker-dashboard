import React from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import { Card } from "@material-ui/core";

export function AgGridWrapper(props: AgGridReactProps) {
  return (
    <Card>
      <div
        className="ag-theme-balham"
        style={{ height: '600px', width: '100%' }}
      >
        <AgGridReact {...props} />
      </div>
    </Card>
  );
};