export enum StockDataKey {
  tickers = 'tickers',
  historicalPrices = 'historicalPrices',
  summaryStats = 'summaryStats',
  company = 'company',
  logo = 'logo',
  earnings = 'earnings'
}

export enum SnapshotStatKey {
  marketCap = "marketcap",
  yearEps = "ttmEPS",
  yearDPs = "ttmDividendRate",
  dividendYield = "dividendYield",
  peRatio = "peRatio",
  beta = "beta"
}

export enum PeriodStatKey {
  high = 'high',
  low = 'low',
  mean = 'mean',
  volatility = 'volatility',
  open = 'open',
  close = 'close',
  change = 'change',
}

export enum RefDataKey {
  tickers = 'tickers',
  stockTypes = 'types',
  regions = 'regions',
  exchanges = 'exchanges'
}

export enum UiStateKey {
  activeTicker = 'activeTicker',
  stockType = 'type',
  timeRange = 'timeRange',
  region = 'region',
  exchange = 'exchange'
}

export enum TimeRangeKey {
  today = 'Last Day',
  yesterday = 'Last Day -1',
  lastWeek = 'Last Week',
  lastMonth = 'Last Month',
  lastQuarter = 'Last Quarter',
  lastYear = 'Last Year'
}

export enum StockType {
  commonStock = 'cs',
  preferredStock = 'ps',
  etf = 'et',
  reit = 're',
  secondaryIssue = 'si',
  limitedPartnership = 'lp',
  adr = 'ad',
  warrant = 'wt',
  openEndedFund = 'oef',
  closeEndedFund = 'cef',
  unit = 'ut',
  structuredProduct = 'struct'
}

export enum PriceKey {
  "date" = 'date',
  "minute" = "minute",
  "open" = "open",
  "close" = "close",
  "high" = "high",
  "low" = "low",
  "volume" = "volume",
}