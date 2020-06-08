import { Ticker, IexReqOptions, SummaryStats, IexResponseBody, Price, CacheValidator, PathBuilder, RangePathOptions, TickerPathOptions, CompanyReference, FiscalPeriodEarnings, Logo } from "../types";
import { buildUrl } from ".";
import { StockDataKey, TimeRangeKey } from "../constants";
import { lastDay, lastQuarter, cacheValidatorFromTimeRange } from "./utils";
import { timeRangeKeyToRangePath } from "./modelMaps";

const API_KEY = "pk_63509e5b43384ab08845be28759fb5ea"
const API_BASE_URL = "https://cloud.iexapis.com"
const STOCK_PATH = '/stable/stock'
const tickerPath = (ticker: string) => `/${STOCK_PATH}/${ticker}`

const tickersRefPath: PathBuilder<{}> = () => '/stable/ref-data/symbols';
const historicalPricesPath: PathBuilder<RangePathOptions> = ({ ticker, range }) => `${tickerPath(ticker)}/chart/${range}`;
const summaryStatsPath: PathBuilder<TickerPathOptions> = ({ ticker }) => `${tickerPath(ticker)}/stats`;
const companyRefPath: PathBuilder<TickerPathOptions> = ({ ticker }) => `${tickerPath(ticker)}/company`
const earningsPath: PathBuilder<TickerPathOptions> = ({ ticker }) => `${tickerPath(ticker)}/earnings/1/fiscalPeriod`
const logoPath: PathBuilder<TickerPathOptions> = ({ ticker }) => `${tickerPath(ticker)}/logo`

// https://iexcloud.io/docs/api/#symbols
export async function getTickers() {
  return iexRequest<StockDataKey.tickers, Ticker[]>({
    category: StockDataKey.tickers,
    path: tickersRefPath({}),
  },
    lastDay
  )
}

// https://iexcloud.io/docs/api/#historical-prices
export async function getHistoricalPrices(ticker: string, range: TimeRangeKey) {
  return iexRequest<StockDataKey.historicalPrices, Price[]>({
    category: StockDataKey.historicalPrices,
    path: historicalPricesPath({ ticker, range: timeRangeKeyToRangePath(range) }),
  },
    cacheValidatorFromTimeRange(range)
  )
}

// https://iexcloud.io/docs/api/#key-stats
export async function getSummaryStats(ticker: string) {
  return iexRequest<StockDataKey.summaryStats, SummaryStats>({
    category: StockDataKey.summaryStats,
    path: summaryStatsPath({ ticker }),
  },
    lastDay
  )
}

// https://iexcloud.io/docs/api/#company
export async function getCompanyRef(ticker: string) {
  return iexRequest<StockDataKey.company, CompanyReference>({
    category: StockDataKey.company,
    path: companyRefPath({ ticker }),
  },
    lastQuarter)
}

// https://iexcloud.io/docs/api/#earnings
export async function getEarnings(ticker: string) {
  return iexRequest<StockDataKey.earnings, FiscalPeriodEarnings>({
    category: StockDataKey.earnings,
    path: earningsPath({ ticker })
  },
    lastQuarter)
}

// https://iexcloud.io/docs/api/#logo
export async function getLogo(ticker: string) {
  return iexRequest<StockDataKey.logo, Logo>({
    category: StockDataKey.logo,
    path: logoPath({ ticker })
  },
    lastQuarter)
}

async function iexRequest<T extends StockDataKey, Q extends IexResponseBody<T>>(reqOptions: IexReqOptions<T>, cacheValidator?: CacheValidator) {
  const request = new Request(buildUrl(API_BASE_URL, reqOptions.path, { token: API_KEY }));
  let cache: Cache | undefined;
  if (cacheValidator) {
    cache = await window.caches.open(reqOptions.category)
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      const cacheTimestamp = cachedResponse.headers.get("X-Cache-Timestamp");
      if (cacheTimestamp && cacheValidator(cacheTimestamp)) {
        const resolved: Q = await cachedResponse.json();
        return resolved;
      }
    }
  }
  try {
    const newResponse = await window.fetch(request.clone())
    if (!newResponse.ok) {
      throw new Error('Bad request')
    }
    const body: Q = await newResponse.json();

    if (cache) {
      // Because response headers are immutable, must manually clone.
      const { status, statusText } = newResponse;
      const headers = new Headers({
        "X-Cache-Timestamp": Date.now().toString()
      });
      const clonedResponse = await new Response(new Blob([JSON.stringify(body)], { type: 'application/json' }), { status, headers, statusText })
      cache.put(request, clonedResponse)
    }
    return body;
  } catch (e) {
    console.log(e);
    throw (e);
  }
}

// https://iexcloud.io/docs/api/#logo
// https://iexcloud.io/docs/api/#company
// https://iexcloud.io/docs/api/#largest-trades
// https://iexcloud.io/docs/api/#news
// https://iexcloud.io/docs/api/#stats-historical-summary
