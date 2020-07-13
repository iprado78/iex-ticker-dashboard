import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { StockData, UiState, UiStateAction } from '../types';
import { PriceDataGrid, SelectTimeRange, PriceDataChart } from '.';
import { timeRangeAction } from '../functions';
import { PeriodStatsGrid } from './PeriodStatsGrid';


interface MainProps {
  stockData: StockData,
  uiState: UiState,
  dispatchUiState: React.Dispatch<UiStateAction>
}

export function Main({ uiState, stockData, dispatchUiState }: MainProps) {
  const { timeRange } = uiState
  const { historicalPrices } = stockData
  return (
    <main>
      <Typography color="textSecondary" variant="h5" style={{ fontWeight: "bold" }} >Historical Stats</Typography>
      <SelectTimeRange value={timeRange} dispatch={dispatchUiState} action={timeRangeAction} />
      <Grid container >
        <Grid item xs={2}>
          <PeriodStatsGrid prices={historicalPrices} />
        </Grid>
        <Grid item xs={10}>
          <PriceDataChart ticker={uiState.activeTicker} prices={historicalPrices} timeRange={timeRange} style={{ padding: '0 0 8px 16px' }} />
          <PriceDataGrid historicalPrices={historicalPrices} style={{ padding: '8px 0 0 16px' }} />
        </Grid>
      </Grid>
    </main>
  )
}