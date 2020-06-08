import { RefDataAction, TickersAction } from "../types"
import { getTickers } from "./IexClient";
import { RefDataKey } from "../constants";

interface HydrateRefDataParams {
  dispatch: React.Dispatch<RefDataAction>
}

export function hydrateRefData({ dispatch }: HydrateRefDataParams) {
  getTickers().then(apiTickers => {
    dispatch({
      type: RefDataKey.tickers,
      payload: apiTickers.filter(ticker => ticker.type === 'cs')
    } as TickersAction)
  })
}