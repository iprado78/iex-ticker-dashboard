import { UiStateKey, StatKey, TimeRangeKey, StockType } from "../constants";

export interface UiState {
  [UiStateKey.activeTicker]: string,
  // [UiStateKey.region]: string,
  // [UiStateKey.exchange]: string,
  // [UiStateKey.stockType]: StockType,
  [UiStateKey.timeRange]: TimeRangeKey
}

export type StockTypeEntry = [StockType, string]

export interface Option {
  label: string;
  value: string;
}