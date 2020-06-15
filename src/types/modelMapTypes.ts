import { TimeRangeKey, SnapshotStatKey, StockType, PeriodStatKey } from "../constants";

export type TimeRangeStringMap = {
  [key in TimeRangeKey]: string
}

export type SummaryStatsLabelMap = {
  [key in SnapshotStatKey]: string
}

export type PeriodStatsLabelMap = {
  [key in PeriodStatKey]: string
}

export type StockTypeLabelMap = {
  [key in StockType]: string
}