import { StockDataKey } from "../constants";
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

export interface IexIntradayPrice {
  "date": string,
  "minute": string,
  "label": string,
  "marketOpen": number,
  "marketClose": number,
  "marketHigh": number,
  "marketLow": number,
  "marketAverage": number,
  "marketVolume": number,
  "marketNotional": number,
  "marketNumberOfTrades": number,
  "marketChangeOverTime": number,
  "high": number,
  "low": number,
  "open": number,
  "close": number,
  "average": number,
  "volume": number,
  "notional": number,
  "numberOfTrades": number,
  "changeOverTime": number,
}

export interface IexHistoricalPrice {
  "date": string,
  "open": number,
  "close": number,
  "high": number,
  "low": number,
  "volume": number,
  "uOpen": number,
  "uClose": number,
  "uHigh": number,
  "uLow": number,
  "uVolume": number,
  "change": number,
  "changePercent": number,
  "label": string,
  "changeOverTime": number
}

export interface IexKeyStats {
  "companyName": "string",
  "marketcap": number,
  "week52high": number,
  "week52low": number,
  "week52change": number,
  "sharesOutstanding": number,
  "float": number,
  "avg10Volume": number,
  "avg30Volume": number,
  "day200MovingAvg": number,
  "day50MovingAvg": number,
  "employees": number,
  "ttmEPS": number,
  "ttmDividendRate": number,
  "dividendYield": number,
  "nextDividendDate": string,
  "exDividendDate": string,
  "nextEarningsDate": string,
  "peRatio": number,
  "beta": number,
  "maxChangePercent": number,
  "year5ChangePercent": number,
  "year2ChangePercent": number,
  "year1ChangePercent": number,
  "ytdChangePercent": number,
  "month6ChangePercent": number,
  "month3ChangePercent": number,
  "month1ChangePercent": number,
  "day30ChangePercent": number,
  "day5ChangePercent": number,
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
  T extends StockDataKey.historicalPrices ? IexHistoricalPrice[] :
  T extends StockDataKey.intradayPrices ? IexIntradayPrice[] :
  T extends StockDataKey.summaryStats ? IexKeyStats :
  never;

export interface IexReqOptions<T extends StockDataKey> {
  category: T,
  path: string
}

export type CacheValidator<T extends StockDataKey> = (responseBody: IexResponseBody<T>) => boolean