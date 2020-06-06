import { IexSymbol, Option, Price } from "../types";
import { intradayDatetime } from "./utils";

export const symbolsToOptions = (symbols: IexSymbol[]): Option[] =>
  symbols.map(({ symbol, name }) => ({
    label: `${symbol} - ${name}`,
    value: symbol
  }))


const priceMap = ({ date, minute, open, high, low, close, volume }: Price) => ({
  datetime: minute ? intradayDatetime(date, minute) : date,
  open,
  close: close,
  change: close - open,
  high,
  low,
  range: high - low,
  volume
})

export const pricesToGrid = (prices: Price[]) => prices.map(priceMap)