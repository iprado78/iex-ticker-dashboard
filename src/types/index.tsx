export * from './actionTypes'
export * from './iexClientTypes'
import { CoreDataKey, UiStateKey } from "../constants";
import { IexHistoricalPrice, IexIntradayPrice, IexKeyStats } from "./iexClientTypes";

export type SymbolEntry = [string, string]

export interface CoreData {
  [CoreDataKey.historicalPrices]: IexHistoricalPrice[];
  [CoreDataKey.intradayPrices]: IexIntradayPrice[];
  [CoreDataKey.summaryStats]: IexKeyStats;
}

export type TimeRange = 'today' | 'lastWeek' | 'lastMonth' | 'lastQuarter' | 'lastYear'

export interface UiState {
  [UiStateKey.activeTicker]: string,
  [UiStateKey.timeRange]: TimeRange
}

