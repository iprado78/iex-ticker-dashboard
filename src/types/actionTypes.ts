import { StockDataKey, UiStateKey, RefDataKey, TimeRangeKey } from "../constants";
import { Price, SummaryStats, StockTypeEntry, Ticker, CompanyReference, Logo, FiscalPeriodEarnings } from ".";

/** Stock Data Actions **/

export interface HistoricalPriceAction {
  type: StockDataKey.historicalPrices;
  payload: Price[];
}

export interface SummaryStatsAction {
  type: StockDataKey.summaryStats,
  payload: SummaryStats
}

export type StockDataAction = HistoricalPriceAction | SummaryStatsAction

/** Ref Data Actions **/

export interface TickersAction {
  type: RefDataKey.tickers,
  payload: Ticker[]
}

export interface StockTypesAction {
  type: RefDataKey.stockTypes,
  payload: StockTypeEntry[]
}

export type RefDataAction = TickersAction | StockTypesAction

/** UI State Actions */

export interface ActiveTickerAction {
  type: UiStateKey.activeTicker,
  payload: string,
}

export interface TimeRangeAction {
  type: UiStateKey.timeRange,
  payload: TimeRangeKey,
}

export interface StockTypeAction {
  type: UiStateKey.stockType,
  payload: string
}

export type UiStateAction = ActiveTickerAction | TimeRangeAction

/** Company Data Actions */

export interface CompanyRefAction {
  type: StockDataKey.company,
  payload: CompanyReference,
}

export interface LogoAction {
  type: StockDataKey.logo,
  payload: Logo,
}

export interface EarningsAction {
  type: StockDataKey.earnings,
  payload: FiscalPeriodEarnings
}

export type CompanyDataAction = CompanyRefAction | LogoAction | EarningsAction

