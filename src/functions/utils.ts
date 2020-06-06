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

export const intradayDatetime = (date: string, time: string) => `${date} ${time}`

// https://momentjs.com/docs/#/parsing/
const cacheValid = (cacheDatetime: string, multiplier: number, granularity: 'minutes' | 'day') => !moment(cacheDatetime).isBefore(moment().subtract(multiplier, granularity))
export const lastCalendarDay = (date: string) => cacheValid(date, 1, 'day')
export const last15Minutes = (datetime: string) => cacheValid(datetime, 15, 'minutes')