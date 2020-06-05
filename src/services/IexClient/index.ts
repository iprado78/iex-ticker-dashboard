
import { IexSymbol, IexHistoricalPrice, IexIntradayPrice, IexKeyStats } from "../../types";
import { CoreDataKey } from "../../constants";
import { iexRequest, symbolsPath, symbolsCacheValid, historicalPricesPath, historicalCacheValid, intradayCacheValid, intradayPath, summaryStatsPath } from "./functions";

// https://iexcloud.io/docs/api/#symbols
export async function getSymbols() {
  return iexRequest<CoreDataKey.symbols, IexSymbol[]>({
    category: CoreDataKey.symbols,
    path: symbolsPath({}),
  },
    symbolsCacheValid
  )
}

// https://iexcloud.io/docs/api/#historical-prices
export async function getHistoricalPrices(symbol: string, range: string) {
  return iexRequest<CoreDataKey.historicalPrices, IexHistoricalPrice[]>({
    category: CoreDataKey.historicalPrices,
    path: historicalPricesPath({ symbol, range }),
  },
    historicalCacheValid
  )
}

// https://iexcloud.io/docs/api/#intraday-prices
export async function getIntradayPrices(symbol: string) {
  return iexRequest<CoreDataKey.intradayPrices, IexIntradayPrice[]>({
    category: CoreDataKey.intradayPrices,
    path: intradayPath({ symbol }),
  },
    intradayCacheValid
  )
}

// https://iexcloud.io/docs/api/#key-stats
export async function getSummaryStats(symbol: string) {
  return iexRequest<CoreDataKey.summaryStats, IexKeyStats>({
    category: CoreDataKey.summaryStats,
    path: summaryStatsPath({ symbol }),
  })
}

// https://cloud.iexapis.com/stable/stock/AAPL/stats?token=pk_63509e5b43384ab08845be28759fb5ea
// https://iexcloud.io/docs/api/#logo
// https://iexcloud.io/docs/api/#peer-groups
// https://iexcloud.io/docs/api/#company
// https://iexcloud.io/docs/api/#largest-trades
// https://iexcloud.io/docs/api/#news
// https://iexcloud.io/docs/api/#stats-historical-summary
