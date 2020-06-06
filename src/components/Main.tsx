import React from 'react';
import { StockData, UiState } from '../types';
import { UiStateKey, StockDataKey, } from '../constants';
import { HistoricalGrid, IntradayGrid } from '../components';

interface MainProps {
  stockData: StockData,
  uiState: UiState
}

export function Main({ uiState, stockData }: MainProps) {
  return (
    <main>
      <div>Time range seelct</div>
      <div>
        <span>Chart 1</span>
        <span>Chart 2</span>
        <span>Chart 3</span>
      </div>
      <div>
        {
          uiState[UiStateKey.timeRange] === 'today' ?
            <IntradayGrid intradayPrices={stockData[StockDataKey.intradayPrices]} />
            : <HistoricalGrid historicalPrices={stockData[StockDataKey.historicalPrices]} />
        }
      </div>
    </main>
  )
}