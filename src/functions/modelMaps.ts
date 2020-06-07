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
    [lastMonth]: '1mm',
    [lastQuarter]: '3m',
    [lastYear]: '1y'
  }

  return map[timeRangeKey]
}

export const symbolsToOptions = (symbols: Ticker[]): Option[] =>
  symbols.map(({ symbol, name }) => ({
    label: `${symbol} - ${name}`,
    value: symbol
  }))


const priceGridMap = ({ date, minute, open, high, low, close, volume }: Price) => ({
  datetime: minute ? toDateTime(date, minute) : date,
  open: formatPrice(open),
  close: formatPrice(close),
  change: formatPrice(close - open),
  high: formatPrice(high),
  low: formatPrice(low),
  range: formatPrice(high - low),
  volume: formatVolume(volume)
})

const priceChartPick = ({ date: _d, minute: _m, volume: _v, ...rest }: Price) => rest

export const pricesToChart = (prices: Price[]) => prices.map(priceChartPick)

export const pricesToGrid = (prices: Price[]) => prices.map(priceGridMap)