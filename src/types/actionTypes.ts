import { StockDataKey, UiStateKey, RefDataKey } from "../constants";
import { Price, IexKeyStats, IexSymbol } from "./iexClientTypes";
import { TimeRange, StockTypeEntry } from ".";

/** Stock Data Actions **/

export interface IntradayPriceAction {
  type: StockDataKey.intradayPrices;
  payload: Price[];
}

export interface HistoricalPriceAction {
  type: StockDataKey.historicalPrices;
  payload: Price[];
}

export interface SummaryStatsAction {
  type: StockDataKey.summaryStats,
  payload: IexKeyStats
}

export type StockDataAction = IntradayPriceAction | HistoricalPriceAction | SummaryStatsAction

/** Ref Data Actions **/

export interface SymbolsAction {
  type: RefDataKey.symbols,
  payload: IexSymbol[]
}

export interface StockTypesAction {
  type: RefDataKey.stockTypes,
  payload: StockTypeEntry[]
}

export type RefDataAction = SymbolsAction | StockTypesAction

/** UI State Actions */

export interface ActiveTickerAction {
  type: UiStateKey.activeTicker,
  payload: string,
}

export interface TimeRangeAction {
  type: UiStateKey.timeRange,
  payload: TimeRange,
}

export interface StockTypeAction {
  type: UiStateKey.stockType,
  payload: string
}

export type UiStateAction = ActiveTickerAction | TimeRangeAction

