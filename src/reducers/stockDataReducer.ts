import { StockDataKey } from "../constants";
import { StockData, SummaryStats, StockDataAction } from "../types";

export const STOCK_DATA_DEFAULT_STATE: StockData = {
  [StockDataKey.historicalPrices]: [],
  [StockDataKey.summaryStats]: {} as SummaryStats,
}

export function stockDataReducer(state = STOCK_DATA_DEFAULT_STATE, action: StockDataAction) {
  return {
    ...state,
    [action.type]: action.payload
  }
} 
