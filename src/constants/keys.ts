export enum StockDataKey {
  tickers = 'tickers',
  historicalPrices = 'historicalPrices',
  summaryStats = 'summaryStats',
  company = 'company',
  logo = 'logo',
  earnings = 'earnings'
}

export enum StatKey {
  marketCap = "marketcap",
  yearEps = "ttmEPS",
  yearDPs = "ttmDividendRate",
  dividendYield = "dividendYield",
  peRatio = "peRatio",
  beta = "beta"
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
  today = 'Today',
  yesterday = 'Yesterday',
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