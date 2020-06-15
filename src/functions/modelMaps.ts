import moment from 'moment-business-days';
import { Ticker, Option, Price, TimeRangeStringMap } from "../types";
import { toDateTime, formatPrice, formatVolume, normalizeToBusinessDay } from "./utils";
import { TimeRangeKey, DATE_FORMAT, DATETIME_FORMAT } from '../constants';


export const toApiDateFrag = (timeRange: TimeRangeKey.yesterday | TimeRangeKey.today, d = moment()) => {
  let date = normalizeToBusinessDay(d.clone());
  if (timeRange === TimeRangeKey.yesterday) {
    date = date.prevBusinessDay();
  }
  return date.format('YYYYMMDD')
}

export function timeRangeKeyToRangePath(timeRangeKey: TimeRangeKey) {
  const { today, yesterday, lastWeek, lastMonth, lastQuarter, lastYear } = TimeRangeKey

  const map: TimeRangeStringMap = {
    [today]: `date/${toApiDateFrag(today)}`,
    [yesterday]: `date/${toApiDateFrag(yesterday)}`,
    [lastWeek]: '5dm',
    [lastMonth]: '1m',
    [lastQuarter]: '3m',
    [lastYear]: '1y'
  }

  return map[timeRangeKey]
}

export function timeRangeKeyToChartLabel(timeRangeKey: TimeRangeKey) {
  const { today, yesterday, lastWeek, lastMonth, lastQuarter, lastYear } = TimeRangeKey

  const map: TimeRangeStringMap = {
    [today]: '1-Minute',
    [yesterday]: '1-Minute',
    [lastWeek]: '10-Minute',
    [lastMonth]: '1-Day',
    [lastQuarter]: '1-Day',
    [lastYear]: '1-Day'
  }
  return `${timeRangeKey} - ${map[timeRangeKey]} Periods`
}

export const tickersToOptions = (tickers: Ticker[]): Option[] =>
  tickers.map(({ symbol, name }) => ({
    label: `${symbol} - ${name}`,
    value: symbol
  }))


const dateLabel = (date: string, minute?: string) => minute ? toDateTime(date, minute) : date

const priceGridMap = ({ date, minute, open, high, low, close, volume }: Price) => ({
  datetime: dateLabel(date, minute),
  open: formatPrice(open),
  close: formatPrice(close),
  change: formatPrice(close - open),
  high: formatPrice(high),
  low: formatPrice(low),
  range: formatPrice(high - low),
  volume: formatVolume(volume)
})

const priceChartPick = ({ date, minute, volume: _v, ...rest }: Price) => ({
  x: moment(dateLabel(date, minute), [DATE_FORMAT, DATETIME_FORMAT]).valueOf(),
  ...rest
})

export const pricesToChart = (prices: Price[]) => prices.map(priceChartPick)

export const pricesToGrid = (prices: Price[]) => prices.map(priceGridMap).reverse();