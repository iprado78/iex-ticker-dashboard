import { IexSymbol, IexReqOptions, IntradayPricesPathBuilder, SymbolsPathBuilder, HistoricalPricesPathBuilder, SummaryStatsPathBuilder, IexResponseBody, IexHistoricalPrice, IexIntradayPrice, CacheValidator } from "../../types";
import { buildUrl, lastCalendarDay, last15Minutes } from "../../functions";
import { CoreDataKey } from "../../constants";

export const API_KEY = "pk_63509e5b43384ab08845be28759fb5ea"
export const API_BASE_URL = "https://cloud.iexapis.com/stable"

export const symbolsPath: SymbolsPathBuilder = () => '/stable/ref-data/symbols';
export const intradayPath: IntradayPricesPathBuilder = ({ symbol }) => `/stable/stock/${symbol}/intraday-prices`;
export const historicalPricesPath: HistoricalPricesPathBuilder = ({ symbol, range }) => `/stable/stock/${symbol}/chart/${range}`;
export const summaryStatsPath: SummaryStatsPathBuilder = ({ symbol }) => `/stable/stock/${symbol}/stats`;

export const symbolsCacheValid = ([{ date }]: IexSymbol[]) => lastCalendarDay(date)
export const historicalCacheValid = ([{ date }]: IexHistoricalPrice[]) => lastCalendarDay(date)
export const intradayCacheValid = ([{ date, minute }]: IexIntradayPrice[]) => last15Minutes(`${date} ${minute}`)

export async function iexRequest<T extends CoreDataKey, Q extends IexResponseBody<T>>(reqOptions: IexReqOptions<T>, cacheValidator?: CacheValidator<T>) {
  const request = new Request(buildUrl(API_BASE_URL, reqOptions.path, { token: API_KEY }));
  let cache: Cache | undefined;
  if (cacheValidator) {
    cache = await window.caches.open(reqOptions.category)
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      const resolvedCacheResponse: Q = await cachedResponse.json();
      if (resolvedCacheResponse && cacheValidator(resolvedCacheResponse)) {
        return resolvedCacheResponse;
      }
    }
  }
  try {
    const newResponse = await window.fetch(request.clone())
    if (!newResponse.ok) {
      throw new Error('Bad request')
    }
    const resolvedNewResponse: Q = await newResponse.clone().json();
    if (cache) {
      cache.put(request, newResponse)
    }
    return resolvedNewResponse;
  } catch (e) {
    console.log(e);
    throw (e);
  }
}