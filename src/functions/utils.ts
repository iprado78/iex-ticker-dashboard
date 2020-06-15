import moment, { Moment } from 'moment-business-days'
import { TimeRangeKey } from '../constants';

export const buildUrl = (host: string, path?: string, queryParams?: any) => {
  const url = new URL(host);
  if (path) {
    url.pathname = path;
  }
  if (queryParams) {
    url.search = new URLSearchParams(queryParams).toString()
  }
  return url.toString()
}

/**
 * 
 * @param date - YYY-MM-DD
 * @param time - HH:mm
 */
export const toDateTime = (date: string, time: string) => `${date} ${time}`

const cacheValid = (cacheTimeStamp: string, boundary: Moment) => {
  return !moment(cacheTimeStamp).isBefore(boundary)
}

export const cachedSinceYesterdayClose = (cacheTimestamp: string, now = moment()) => {
  return cacheValid(cacheTimestamp, now.prevBusinessDay().hours(16))
}

export const cachedSinceTodayClose = (cacheTimestamp: string, now = moment()) => {
  return cacheValid(cacheTimestamp, now.hours(16))
}

export const cachedSinceLastQuarter = (cacheTimestamp: string) => cacheValid(cacheTimestamp, moment().subtract(1, 'quarter'))
export const cachedSinceLast15Minutes = (cacheTimestamp: string) => cacheValid(cacheTimestamp, moment().subtract(15, 'minutes'))

const formatWrapper = (max = 2, min = 2) => new Intl.NumberFormat(
  'en-US',
  {
    style: 'decimal',
    maximumFractionDigits: max,
    minimumFractionDigits: min,
  }
);

export const { format: formatPrice } = formatWrapper();
export const { format: formatVolume } = formatWrapper(0, 0);
export const { format: formatSummaryStats } = formatWrapper(4, 2);
const marketCapNumber = formatWrapper(3, 0).format

const MILLION = Math.pow(10, 6);
const BILLION = Math.pow(10, 9);
const TRILLION = Math.pow(10, 12);

export const formatMarketCap = (marketCap: number) =>
  marketCap >= TRILLION ? marketCapNumber(marketCap / TRILLION) + 'T' :
    marketCap >= BILLION ? marketCapNumber(marketCap / BILLION) + 'B' :
      marketCap >= MILLION ? marketCapNumber(marketCap / MILLION) + 'M' :
        formatVolume(marketCap)

export const afterOpening = (datetime = moment()) => datetime.hours() > 9 ||
  (datetime.hours() === 9 && datetime.minutes() >= 30);

export const beforeClose = (datetime = moment()) => datetime.hours() < 16

export const cacheValidatorFromTimeRange = (timeRange: TimeRangeKey, now = moment()) => {
  return timeRange !== 'Today' || !afterOpening(now) ?
    cachedSinceYesterdayClose :
    beforeClose(now) ? cachedSinceLast15Minutes :
      cachedSinceTodayClose
}

export const normalizeToBusinessDay = (date = moment()) => {
  return date.isBusinessDay() && afterOpening(date) ? date : date.clone().prevBusinessDay()
}

export const avg = (list: number[]) => {
  if (!list.length) {
    throw new RangeError();
  }
  return list.reduce((sum, num) => sum + num) / list.length;
}