import { avg } from "./utils";
import { Price, PeriodStats } from "../types";
import { PriceKey } from "../constants";

type AggregationKey = PriceKey.high | PriceKey.low | PriceKey.open | PriceKey.close

const cleanPrices = (prices: Price[], keys: AggregationKey[]) => prices.filter(price => keys.every(key => price[key] != null))
const oneDPrices = (prices: Price[], key: AggregationKey) => cleanPrices(prices, [key]).map(price => price[key]);

const volatility = (prices: number[], mean = 0) => {
  const diffSquares = prices.map(price => Math.pow(price - mean, 2));
  return Math.sqrt(avg(diffSquares));
}

const maxMinInPriceSet = (prices: Price[]) => {
  const cleaned = cleanPrices(prices, [PriceKey.high, PriceKey.low])
  if (!cleaned.length) {
    return {
      high: 0,
      low: 0
    }
  }
  const [{ high, low }, ...rest] = cleaned;
  return rest.reduce((accum, price) => {
    return {
      high: Math.max(accum.high, price.high),
      low: Math.min(accum.low, price.low)
    }
  }, { high, low })
}


const changePercent = (start: number, finish: number) => 100 * (finish - start) / start

export const aggregatePeriodStats = (prices: Price[]): PeriodStats => {
  if (!prices.length) return {} as PeriodStats
  const { open } = prices[0];
  const { close } = prices[prices.length - 1];
  const { high, low } = maxMinInPriceSet(prices);
  const closePrices = oneDPrices(prices, PriceKey.close);
  const mean = avg(closePrices);
  return {
    high,
    low,
    mean,
    volatility: volatility(closePrices, mean),
    open,
    close,
    change: changePercent(open, close)
  }
}