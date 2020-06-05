import { CoreDataKey, UiStateKey } from "../constants";
import { IexIntradayPrice, IexHistoricalPrice, IexKeyStats, IexSymbol } from "./iexClientTypes";
import { TimeRange } from ".";

interface ReducerAction<T, P> {
  type: T;
  paylaod: P;
}

export interface IntradayPriceAction {
  type: CoreDataKey.intradayPrices;
  payload: IexIntradayPrice[];
}

export interface HistoricalPriceAction {
  type: CoreDataKey.historicalPrices;
  payload: IexHistoricalPrice[];
}

export interface SummaryStatsAction {
  type: CoreDataKey.summaryStats,
  payload: IexKeyStats
}

export interface SymbolsAction {
  type: CoreDataKey.symbols,
  payload: IexSymbol[]
}

export interface ActiveTickerAction {
  type: UiStateKey.activeTicker,
  payload: string,
}

export interface TimeRangeAction {
  type: UiStateKey.timeRange
  payload: TimeRange,
}

export type UiStateAction = ActiveTickerAction | TimeRangeAction

export type CoreDataAction = IntradayPriceAction | HistoricalPriceAction | SummaryStatsAction | SymbolsAction