import { StockDataKey, StatsKeys } from "../constants";
import { StockType } from ".";

export interface IexSymbol {
  "symbol": string;
  "name": string;
  "date": string;
  "exchange": string;
  "type": StockType;
  "region": string;
  "currency": string;
}

export interface Price {
  "date": string,
  "minute"?: string,
  "open": number,
  "close": number,
  "high": number,
  "low": number,
  "volume": number,
}

export type IexKeyStats = {
  [key in StatsKeys]: number
}

export type SummaryStatsLabelMap = {
  [key in StatsKeys]: string
}

export interface HistoricalPathBuilderOptions {
  symbol: string,
  range: string
}
export interface IntradayPathBuilderOptions {
  symbol: string
}
export interface SummaryStatsPathBuilderOptions {
  symbol: string
}

export type BasePathBuilder<T> = (options: T) => string
export type SymbolsPathBuilder = BasePathBuilder<{}>
export type HistoricalPricesPathBuilder = BasePathBuilder<HistoricalPathBuilderOptions>
export type IntradayPricesPathBuilder = BasePathBuilder<IntradayPathBuilderOptions>
export type SummaryStatsPathBuilder = BasePathBuilder<SummaryStatsPathBuilderOptions>

export type IexResponseBody<T extends StockDataKey> = T extends StockDataKey.symbols ? IexSymbol[] :
  T extends StockDataKey.historicalPrices ? Price[] :
  T extends StockDataKey.intradayPrices ? Price[] :
  T extends StockDataKey.summaryStats ? IexKeyStats :
  never;

export interface IexReqOptions<T extends StockDataKey> {
  category: T,
  path: string
}

export type CacheValidator<T extends StockDataKey> = (responseBody: IexResponseBody<T>) => boolean