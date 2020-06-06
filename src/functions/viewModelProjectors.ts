import { IexSymbol, Option } from "../types";

export const symbolsToOptions = (symbols: IexSymbol[]): Option[] =>
  symbols.map(({ symbol, name }) => ({
    label: `${symbol} - ${name}`,
    value: symbol
  }))