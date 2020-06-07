import moment from 'moment';
import { Ticker, Option, Price, RangePathMap } from "../types";
import { toDateTime, formatPrice, formatVolume } from "./utils";
import { TimeRangeKey } from '../constants';

const toApiDateFrag = (timeRange: TimeRangeKey.yesterday | TimeRangeKey.today) => {
  let date = moment();
  if (timeRange === TimeRangeKey.yesterday) {
    date = date.subtract(1, 'day');
  }
  return date.format('YYYYMMDD')
}

export function timeRangeKeyToRangePath(timeRangeKey: TimeRangeKey) {
  const { today, yesterday, lastWeek, lastMonth, lastQuarter, lastYear } = TimeRangeKey

  const map: RangePathMap = {
    [today]: `date/${toApiDateFrag(today)}`,
    [yesterday]: `date/${toApiDateFrag(yesterday)}`,
    [lastWeek]: '5dm',
    [lastMonth]: '1m',
    [lastQuarter]: '3m',
    [lastYear]: '1y'
  }

  return map[timeRangeKey]
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
  x: moment(dateLabel(date, minute)).valueOf(),
  ...rest
})

export const pricesToChart = (prices: Price[]) => prices.map(priceChartPick)

export const pricesToGrid = (prices: Price[]) => prices.map(priceGridMap)