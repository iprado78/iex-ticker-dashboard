import { SummaryStatsLabelMap, StockTypeLabelMap, Option } from "../types";
import { StatKey } from ".";
import { StockType } from "./keys";

export const DEFAULT_OPTION: Option = {
  label: '',
  value: ''
}

export const statLabelMap: SummaryStatsLabelMap = {
  peRatio: "P/E Ratio",
  marketcap: "Market Cap",
  dividendYield: "Dividend Yield",
  beta: "Beta",
  ttmDividendRate: "Dividend Rate",
  ttmEPS: "Earnings Rate"
}

export const statsKeys = Object.keys(statLabelMap) as StatKey[]

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