import { UiState, UiStateAction } from "../types";
import { UiStateKey, TimeRangeKey } from "../constants";

export const UI_DEFAULT_STATE: UiState = {
  [UiStateKey.activeTicker]: 'AAPL',
  [UiStateKey.timeRange]: TimeRangeKey.today,
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