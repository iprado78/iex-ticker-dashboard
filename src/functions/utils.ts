import moment from 'moment'

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

// https://momentjs.com/docs/#/parsing/
const cacheValid = (cacheDatetime: string, multiplier: number, granularity: 'minutes' | 'day') => !moment(cacheDatetime).isBefore(moment().subtract(multiplier, granularity))
export const lastCalendarDay = (date: string) => cacheValid(date, 1, 'day')
export const last15Minutes = (datetime: string) => cacheValid(datetime, 15, 'minutes')

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
