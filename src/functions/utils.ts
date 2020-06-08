import moment from 'moment-business-days'
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

export const toDateTime = (date: string, time: string) => `${date} ${time}`

const cacheValid = (cacheTimestamp: string, multiplier: number, granularity: 'minutes' | 'day' | 'quarter') => !moment(cacheTimestamp).isBefore(normalizeToBusinessDay().subtract(multiplier, granularity))
export const lastDay = (cacheTimestamp: string) => cacheValid(cacheTimestamp, 1, 'day')
export const lastQuarter = (cacheTimestamp: string) => cacheValid(cacheTimestamp, 1, 'quarter')
const last15Minutes = (cacheTimestamp: string) => cacheValid(cacheTimestamp, 15, 'minutes')

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
  marketCap >= TRILLION ? marketCapNumber(marketCap / TRILLION) + ' T' :
    marketCap >= BILLION ? marketCapNumber(marketCap / BILLION) + ' B' :
      marketCap >= MILLION ? marketCapNumber(marketCap / MILLION) + ' M' :
        formatVolume(marketCap)

const afterOpening = (datetime = moment()) => datetime.hours() >= 9 && datetime.minutes() >= 30;
const beforeClose = (datetime = moment()) => datetime.hours() < 16

export const cacheValidatorFromTimeRange = (timeRange: TimeRangeKey) => {
  console.log('TimeRangeKey', )
  return timeRange === 'Today' && afterOpening() && beforeClose() ? last15Minutes : lastDay
}

export const normalizeToBusinessDay = (date = moment(), checkOpening = true) => {
  return date.isBusinessDay() && (checkOpening ? afterOpening(date) : true) ? date : date.prevBusinessDay()
}
