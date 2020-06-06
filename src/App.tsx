import React, { useReducer, useEffect, Reducer } from 'react';
import { ThemeProvider } from "@material-ui/core";
import { theme } from './theme';
import { Header, Main, Sidebar, SelectTicker, SummaryStats } from './components';
import { stockDataReducer, STOCK_DATA_DEFAULT_STATE, uiStateReducer, UI_DEFAULT_STATE, refDataReducer, REF_DATA_DEFAULT_STATE } from './reducers';
import { StockData, UiState, StockDataAction, UiStateAction, RefData, RefDataAction } from './types';
import { hydrateStockData, hydrateRefData, activeTickerAction, symbolsToOptions } from './functions';
import { DEFAULT_OPTION } from './constants';


function App() {
  const [uiState, dispatchUiState] = useReducer<Reducer<UiState, UiStateAction>>(uiStateReducer, UI_DEFAULT_STATE);
  const [refData, dispatchRefData] = useReducer<Reducer<RefData, RefDataAction>>(refDataReducer, REF_DATA_DEFAULT_STATE)
  const [stockData, dispatchStockData] = useReducer<Reducer<StockData, StockDataAction>>(stockDataReducer, STOCK_DATA_DEFAULT_STATE);

  useEffect(() => {
    hydrateStockData({ uiState, dispatch: dispatchStockData });
    hydrateRefData({ uiState, dispatch: dispatchRefData })
  }, [uiState])

  const symbolOptions = symbolsToOptions(refData.symbols)
  const selectedSymbolOption = symbolOptions.find(symbol => symbol.value === uiState.activeTicker) || DEFAULT_OPTION

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <SelectTicker selectedSymbolOption={selectedSymbolOption} dispatch={dispatchUiState} action={activeTickerAction} symbolOptions={symbolOptions} />
      </Header>
      <SummaryStats summaryStats={stockData.summaryStats} />
      <Main stockData={stockData} uiState={uiState} />
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;
