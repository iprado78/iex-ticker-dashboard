import React, { useReducer, useEffect, Reducer } from 'react';
import { ThemeProvider, Grid, useMediaQuery } from "@material-ui/core";
import { theme } from './theme';
import { Header, Main, Sidebar, SelectTicker, SummaryStatsGrid } from './components';
import { stockDataReducer, STOCK_DATA_DEFAULT_STATE, uiStateReducer, UI_DEFAULT_STATE, refDataReducer, REF_DATA_DEFAULT_STATE, companyDataReducer, COMPANY_DATA_DEFAULT_STATE } from './reducers';
import { StockData, UiState, StockDataAction, UiStateAction, RefData, RefDataAction, CompanyData, CompanyDataAction } from './types';
import { hydrateStockData, hydrateRefData, activeTickerAction, hydrateCompanyData } from './functions';


function App() {
  const [uiState, dispatchUiState] = useReducer<Reducer<UiState, UiStateAction>>(uiStateReducer, UI_DEFAULT_STATE);
  const [refData, dispatchRefData] = useReducer<Reducer<RefData, RefDataAction>>(refDataReducer, REF_DATA_DEFAULT_STATE)
  const [stockData, dispatchStockData] = useReducer<Reducer<StockData, StockDataAction>>(stockDataReducer, STOCK_DATA_DEFAULT_STATE);
  const [companyData, dispatchCompanyData] = useReducer<Reducer<CompanyData, CompanyDataAction>>(companyDataReducer, COMPANY_DATA_DEFAULT_STATE);

  useEffect(() => {
    hydrateStockData({ uiState, dispatch: dispatchStockData });
    hydrateRefData({ dispatch: dispatchRefData })
    hydrateCompanyData({ uiState, dispatch: dispatchCompanyData })
  }, [uiState])

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <SelectTicker tickers={refData.tickers} selectedTicker={uiState.activeTicker} dispatch={dispatchUiState} action={activeTickerAction} />
      </Header>
      <Grid container style={{ backgroundColor: '#FAFAFA' }}>
        <Grid item xs={12} md={9} lg={8} xl={7} style={{ height: '100%', padding: "16px 8px 16px 16px" }}>
          <SummaryStatsGrid summaryStats={stockData.summaryStats} style={{ paddingBottom: 64 }} />
          <Main stockData={stockData} uiState={uiState} dispatchUiState={dispatchUiState} />
        </Grid>
        {
          isDesktop && (
            <Grid item md={3} lg={4} xl={5} style={{ padding: "16px 16px 16px 8px" }}>
              <Sidebar companyData={companyData} />
            </Grid>
          )
        }
      </Grid>
    </ThemeProvider >
  );
}

export default App;
