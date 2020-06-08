import { TimeRangeKey, StatKey, StockType } from "../constants";

export type TimeRangeStringMap = {
  [key in TimeRangeKey]: string
}

export type SummaryStatsLabelMap = {
  [key in StatKey]: string
}

export type StockTypeLabelMap = {
  [key in StockType]: string
}