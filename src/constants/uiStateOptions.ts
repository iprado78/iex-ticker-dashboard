import { SummaryStatsLabelMap, StockTypeLabelMap, Option, PeriodStatsLabelMap } from "../types";
import { StockType, PeriodStatKey, SnapshotStatKey } from "./keys";

export const DEFAULT_OPTION: Option = {
  label: '',
  value: ''
}

export const snapshotStatsLabelMap: SummaryStatsLabelMap = {
  peRatio: "P/E Ratio",
  marketcap: "Market Cap",
  dividendYield: "Div Yield",
  beta: "Beta",
  ttmDividendRate: "Div Rate",
  ttmEPS: "Earnings"
}

export const periodStatsLabelMap: PeriodStatsLabelMap = {
  high: "High",
  low: "Low",
  mean: "Mean",
  volatility: "Volatility",
  open: "Open",
  close: "Close",
  change: "Change"
}

export const snapshotStatsKeys = Object.keys(snapshotStatsLabelMap) as SnapshotStatKey[];

export const periodStatsKeys = Object.keys(periodStatsLabelMap) as PeriodStatKey[];

export const stockTypeLabelMap: StockTypeLabelMap = {
  cs: 'Common Stock',
  ps: 'Preferred Stock',
  et: 'ETF',
  re: 'REIT',
  si: 'Secondary Issue',
  lp: 'Limited Partnerships',
  ad: 'ADR',
  wt: 'Warrant',
  oef: 'Open Ended Fund',
  cef: 'Closed Ended Fund',
  ut: 'Unit',
  struct: 'Structured Product'
}

export const stockTypes = Object.keys(stockTypeLabelMap) as StockType[]