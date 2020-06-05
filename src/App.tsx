import React, { useReducer, useEffect, Reducer } from 'react';
import { ThemeProvider } from "@material-ui/core";
import { theme } from './theme';
import { Header, Main, Sidebar, SelectTicker } from './components';
import { coreDataReducer, CORE_DATA_DEFAULT_STATE, uiStateReducer, UI_DEFAULT_STATE } from './reducers';
import { CoreData, UiState, CoreDataAction, UiStateAction } from './types';
import { updateCoreData, updateHistoricalData } from './functions';


function App() {
  const [{ activeTicker, timeRange }, dispatchUiState] = useReducer<Reducer<UiState, UiStateAction>>(uiStateReducer, UI_DEFAULT_STATE);
  const [coreData, dispatchCoreData] = useReducer<Reducer<CoreData, CoreDataAction>>(coreDataReducer, CORE_DATA_DEFAULT_STATE);

  useEffect(() => {
    updateCoreData({ ticker: activeTicker, timeRange, dispatch: dispatchCoreData })
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [activeTicker])

  useEffect(() => {
    updateHistoricalData({ ticker: activeTicker, timeRange, dispatch: dispatchCoreData })
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [timeRange])

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <SelectTicker updateUiState={dispatchUiState} />
      </Header>
      <Main coreData={coreData} />
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;
