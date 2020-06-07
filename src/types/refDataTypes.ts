import { RefDataKey, StockType } from "../constants";
import { Ticker } from ".";

export interface RefData {
  [RefDataKey.tickers]: Ticker[],
  [RefDataKey.stockTypes]: StockType[]
}