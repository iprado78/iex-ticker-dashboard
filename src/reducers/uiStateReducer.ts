import { UiState, UiStateAction } from "../types";
import { UiStateKey } from "../constants";

export const UI_DEFAULT_STATE: UiState = {
  [UiStateKey.activeTicker]: 'aapl',
  [UiStateKey.timeRange]: 'today',
  // [UiStateKey.stockType]: 'cs',
  // [UiStateKey.region]: 'US',
  // [UiStateKey.exchange]: 'NAS'
}

export function uiStateReducer(state = UI_DEFAULT_STATE, action: UiStateAction) {
  return {
    ...state,
    [action.type]: action.payload
  }
} 