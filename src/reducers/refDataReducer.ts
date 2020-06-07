import { RefDataKey, stockTypes } from "../constants";
import { RefData, RefDataAction } from "../types";

export const REF_DATA_DEFAULT_STATE: RefData = {
  [RefDataKey.tickers]: [],
  [RefDataKey.stockTypes]: stockTypes,
}

export function refDataReducer(state = REF_DATA_DEFAULT_STATE, action: RefDataAction) {
  return {
    ...state,
    [action.type]: action.payload
  }
}





