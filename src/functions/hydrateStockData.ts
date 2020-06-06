import { getHistoricalPrices, getIntradayPrices, getSummaryStats } from "../services/IexClient";
import { StockDataKey } from "../constants";
import { IntradayPriceAction, HistoricalPriceAction, SummaryStatsAction, StockDataAction, UiState } from "../types";

interface StockDataUpdateParams {
  uiState: UiState,
  dispatch: React.Dispatch<StockDataAction>
}

export function hydrateStockData(params: StockDataUpdateParams) {
  hydrateIntradayData(params);
  hydrateSummaryStatsData(params);
  hydrateHistoricalData(params);
}

function hydrateHistoricalData({ uiState, dispatch }: StockDataUpdateParams) {
  const { activeTicker, timeRange } = uiState
  getHistoricalPrices(activeTicker, timeRange)
    .then(res =>
      dispatch({
        type: StockDataKey.historicalPrices,
        payload: res
      } as HistoricalPriceAction)
    )
}

function hydrateIntradayData({ uiState, dispatch }: StockDataUpdateParams) {
  const { activeTicker } = uiState
  getIntradayPrices(activeTicker)
    .then(res =>
      dispatch({
        type: StockDataKey.intradayPrices,
        payload: res
      } as IntradayPriceAction)
    )
}

function hydrateSummaryStatsData({ uiState, dispatch }: StockDataUpdateParams) {
  const { activeTicker } = uiState
  getSummaryStats(activeTicker)
    .then(res => {
      dispatch({
        type: StockDataKey.summaryStats,
        payload: res
      } as SummaryStatsAction)
    })
}