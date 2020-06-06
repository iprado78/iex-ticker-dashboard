import React, { useReducer, useEffect, Reducer, useMemo } from 'react';
import { ThemeProvider } from "@material-ui/core";
import { theme } from './theme';
import { Header, Main, Sidebar, SelectTicker } from './components';
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

  const symbolOptions = useMemo(() => symbolsToOptions(refData.symbols), [refData.symbols])
  const selectedSymbolOption = useMemo(() => symbolOptions.find(symbol => symbol.value === uiState.activeTicker) || DEFAULT_OPTION, [uiState.activeTicker])

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <SelectTicker selectedSymbolOption={selectedSymbolOption} dispatch={dispatchUiState} action={activeTickerAction} symbolOptions={symbolOptions} />
      </Header>
      <Main coreData={stockData} />
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;
