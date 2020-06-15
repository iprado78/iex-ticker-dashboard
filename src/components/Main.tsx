import React from 'react';
import { Divider, Typography } from '@material-ui/core';
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
      <Typography align="center" color="textSecondary">Historical Value</Typography>
      <Divider />
      <SelectTimeRange value={timeRange} dispatch={dispatchUiState} action={timeRangeAction} />
      <PeriodStatsGrid prices={historicalPrices} />
      <PriceDataChart ticker={uiState.activeTicker} prices={historicalPrices} timeRange={timeRange} />
      <PriceDataGrid historicalPrices={historicalPrices} />
    </main>
  )
}