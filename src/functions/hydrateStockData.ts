import { getHistoricalPrices, getSummaryStats } from "./IexClient";
import { StockDataKey } from "../constants";
import { HistoricalPriceAction, SummaryStatsAction, StockDataAction, UiState } from "../types";
import { timeRangeKeyToRangePath } from "./modelMaps";

interface StockDataUpdateParams {
  uiState: UiState,
  dispatch: React.Dispatch<StockDataAction>
}

export function hydrateStockData(params: StockDataUpdateParams) {
  hydrateSummaryStatsData(params);
  hydrateHistoricalData(params);
}

function hydrateHistoricalData({ uiState, dispatch }: StockDataUpdateParams) {
  const { activeTicker, timeRange } = uiState
  getHistoricalPrices(activeTicker, timeRangeKeyToRangePath(timeRange))
    .then(res =>
      dispatch({
        type: StockDataKey.historicalPrices,
        payload: res
      } as HistoricalPriceAction)
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