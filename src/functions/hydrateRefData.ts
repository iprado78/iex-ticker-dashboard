import { UiState, RefDataAction, TickersAction } from "../types"
import { getSymbols } from "./IexClient";
import { RefDataKey, UiStateKey } from "../constants";

interface HydrateRefDataParams {
  uiState: UiState;
  dispatch: React.Dispatch<RefDataAction>
}

export function hydrateRefData({ uiState, dispatch }: HydrateRefDataParams) {

  getSymbols().then(apiTickers => {
    dispatch({
      type: RefDataKey.tickers,
      payload: apiTickers.filter(ticker => ticker.type === 'cs')
    } as TickersAction)
  })
}

// apiSymbols.filter(symbol => {
  // return symbol.type === uiState[UiStateKey.stockType] &&
  //   symbol.region === uiState[UiStateKey.region] &&
  //   symbol.exchange === uiState[UiStateKey.exchange]
// })