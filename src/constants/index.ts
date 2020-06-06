import { StockTypeEntry, Option } from "../types";

export enum StockDataKey {
  symbols = 'symbols',
  historicalPrices = 'historicalPrices',
  intradayPrices = 'intradayPrices',
  summaryStats = 'summaryStats',
}

export enum UiStateKey {
  activeTicker = 'activeTicker',
  stockType = 'type',
  timeRange = 'timeRange',
  region = 'region',
  exchange = 'exchange'
}

export enum RefDataKey {
  symbols = 'symbols',
  stockTypes = 'types',
  regions = 'regions',
  exchanges = 'exchanges'
}

/**
 * No Iex endpoint for retrieving on demand.  
 * List taken from symbols endpoint response attribute documentation, 6/6/2020.
 * https://iexcloud.io/docs/api/#symbols
 */
export const stockTypes: StockTypeEntry[] = [
  ['cs', 'Common Stock'],
  ['ps', 'Preferred Stock'],
  ['et', 'ETF'],
  ['re', 'REIT'],
  ['si', 'Secondary Issue'],
  ['lp', 'Limited Partnerships'],
  ['ad', 'ADR'],
  ['wt', 'Warrant'],
  ['oef', 'Open Ended Fund'],
  ['cef', 'Closed Ended Fund'],
  ['ut', 'Unit'],
  ['struct', 'Structured Product']
]

export const DEFAULT_OPTION: Option = {
  label: '',
  value: ''
}