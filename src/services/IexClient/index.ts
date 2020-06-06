
import { IexSymbol, Price, IexKeyStats } from "../../types";
import { StockDataKey } from "../../constants";
import { iexRequest, symbolsPath, symbolsCacheValid, historicalPricesPath, historicalCacheValid, intradayCacheValid, intradayPath, summaryStatsPath } from "./functions";

// https://iexcloud.io/docs/api/#symbols
export async function getSymbols() {
  return iexRequest<StockDataKey.symbols, IexSymbol[]>({
    category: StockDataKey.symbols,
    path: symbolsPath({}),
  },
    symbolsCacheValid
  )
}

// https://iexcloud.io/docs/api/#historical-prices
export async function getHistoricalPrices(symbol: string, range: string) {
  return iexRequest<StockDataKey.historicalPrices, Price[]>({
    category: StockDataKey.historicalPrices,
    path: historicalPricesPath({ symbol, range }),
  },
    historicalCacheValid
  )
}

// https://iexcloud.io/docs/api/#intraday-prices
export async function getIntradayPrices(symbol: string) {
  return iexRequest<StockDataKey.intradayPrices, Price[]>({
    category: StockDataKey.intradayPrices,
    path: intradayPath({ symbol }),
  },
    intradayCacheValid
  )
}

// https://iexcloud.io/docs/api/#key-stats
export async function getSummaryStats(symbol: string) {
  return iexRequest<StockDataKey.summaryStats, IexKeyStats>({
    category: StockDataKey.summaryStats,
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
