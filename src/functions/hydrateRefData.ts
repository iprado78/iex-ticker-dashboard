import { UiState, RefDataAction, SymbolsAction } from "../types"
import { getSymbols } from "../services/IexClient";
import { RefDataKey, UiStateKey } from "../constants";

interface HydrateRefDataParams {
  uiState: UiState;
  dispatch: React.Dispatch<RefDataAction>
}

export function hydrateRefData({ uiState, dispatch }: HydrateRefDataParams) {

  getSymbols().then(apiSymbols => {
    dispatch({
      type: RefDataKey.symbols,
      payload: apiSymbols
    } as SymbolsAction)
  })
}

// apiSymbols.filter(symbol => {
  // return symbol.type === uiState[UiStateKey.stockType] &&
  //   symbol.region === uiState[UiStateKey.region] &&
  //   symbol.exchange === uiState[UiStateKey.exchange]
// })