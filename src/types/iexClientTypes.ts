import { StockDataKey } from "../constants";
import { Price, SummaryStats, Ticker, CompanyReference, Logo, FiscalPeriodEarnings } from ".";

export interface TickerPathOptions {
  ticker: string
}
export interface RangePathOptions extends TickerPathOptions {
  range: string;
}

export type PathBuilder<T> = (options: T) => string

export type IexResponseBody<T extends StockDataKey> = T extends StockDataKey.tickers ? Ticker[] :
  T extends StockDataKey.historicalPrices ? Price[] :
  T extends StockDataKey.summaryStats ? SummaryStats :
  T extends StockDataKey.company ? CompanyReference :
  T extends StockDataKey.logo ? Logo :
  T extends StockDataKey.earnings ? FiscalPeriodEarnings :
  never;

export interface IexReqOptions<T extends StockDataKey> {
  category: T,
  path: string
}

export type CacheValidator<T extends StockDataKey> = (responseBody: IexResponseBody<T>) => boolean