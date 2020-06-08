import React from 'react';
import { StockData, UiState, UiStateAction } from '../types';
import { PriceDataGrid, SelectTimeRange, PriceDataChart } from '.';
import { timeRangeAction } from '../functions';

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
      <SelectTimeRange value={timeRange} dispatch={dispatchUiState} action={timeRangeAction} />
      <PriceDataChart ticker={uiState.activeTicker} prices={historicalPrices} timeRange={timeRange} />
      <PriceDataGrid historicalPrices={historicalPrices} />
    </main>
  )
}