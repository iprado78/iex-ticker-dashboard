import { UiStateKey, TimeRangeKey, StockType } from "../constants";

export interface UiState {
  [UiStateKey.activeTicker]: string,
  [UiStateKey.timeRange]: TimeRangeKey
}

export type StockTypeEntry = [StockType, string]

export interface Option {
  label: string;
  value: string;
}