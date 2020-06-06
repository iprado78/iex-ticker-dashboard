export * from './actionTypes'
export * from './iexClientTypes'
import { StockDataKey, UiStateKey, RefDataKey } from "../constants";
import { Price, IexKeyStats, IexSymbol } from "./iexClientTypes";

export type StockTypeEntry = [StockType, string]

export interface StockData {
  [StockDataKey.historicalPrices]: Price[];
  [StockDataKey.intradayPrices]: Price[];
  [StockDataKey.summaryStats]: IexKeyStats;
}

export type TimeRange = 'today' | 'lastWeek' | 'lastMonth' | 'lastQuarter' | 'lastYear'

export type StockType = 'cs' | 'ps' | 'et' | 'ETF' | 're' | 'si' | 'lp' | 'ad' | 'wt' | 'oef' | 'cef' | 'ut' | 'struct'

export interface UiState {
  [UiStateKey.activeTicker]: string,
  // [UiStateKey.region]: string,
  // [UiStateKey.exchange]: string,
  // [UiStateKey.stockType]: StockType,
  [UiStateKey.timeRange]: TimeRange
}

export interface RefData {
  [RefDataKey.symbols]: IexSymbol[],
  [RefDataKey.stockTypes]: StockTypeEntry[]
}

export interface Option {
  label: string;
  value: string;
}

