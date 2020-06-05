import { getHistoricalPrices, getIntradayPrices, getSummaryStats } from "../services/IexClient";
import { CoreDataKey } from "../constants";
import { IntradayPriceAction, HistoricalPriceAction, SummaryStatsAction, CoreDataAction } from "../types";

interface CoreDataUpdateParams {
  ticker: string,
  timeRange: string,
  dispatch: React.Dispatch<CoreDataAction>
}

export function updateCoreData(params: CoreDataUpdateParams) {
  updateIntradayData(params);
  updateSummaryStatsData(params);
  updateHistoricalData(params);
}

export function updateHistoricalData({ ticker, timeRange, dispatch }: CoreDataUpdateParams) {
  getHistoricalPrices(ticker, timeRange)
    .then(res =>
      dispatch({
        type: CoreDataKey.historicalPrices,
        payload: res
      } as HistoricalPriceAction)
    )
}

function updateIntradayData({ ticker, dispatch }: CoreDataUpdateParams) {
  getIntradayPrices(ticker)
    .then(res =>
      dispatch({
        type: CoreDataKey.intradayPrices,
        payload: res
      } as IntradayPriceAction)
    )
}

function updateSummaryStatsData({ ticker, dispatch }: CoreDataUpdateParams) {
  getSummaryStats(ticker)
    .then(res => {
      dispatch({
        type: CoreDataKey.summaryStats,
        payload: res
      } as SummaryStatsAction)
    })
}