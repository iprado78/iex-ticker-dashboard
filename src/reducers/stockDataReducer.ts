import { StockDataKey } from "../constants";
import { StockData, IexKeyStats, StockDataAction } from "../types";

export const STOCK_DATA_DEFAULT_STATE: StockData = {
  [StockDataKey.historicalPrices]: [],
  [StockDataKey.intradayPrices]: [],
  [StockDataKey.summaryStats]: {} as IexKeyStats,
}

export function stockDataReducer(state = STOCK_DATA_DEFAULT_STATE, action: StockDataAction) {
  return {
    ...state,
    [action.type]: action.payload
  }
} 
