import { StockDataKey, SnapshotStatKey, StockType, PeriodStatKey } from "../constants";

export interface StockData {
  [StockDataKey.historicalPrices]: Price[];
  [StockDataKey.summaryStats]: SummaryStats;
}

export type SummaryStats = {
  [key in SnapshotStatKey]: number
}

export type PeriodStats = {
  [key in PeriodStatKey]: number
}

export interface Ticker {
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