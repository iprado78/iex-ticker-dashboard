import { ActiveTickerAction, TimeRangeAction } from "../types";
import { UiStateKey, TimeRangeKey } from "../constants";

export const activeTickerAction = (ticker: string): ActiveTickerAction => ({
  type: UiStateKey.activeTicker,
  payload: ticker
})

export const timeRangeAction = (timeRange: TimeRangeKey): TimeRangeAction => ({
  type: UiStateKey.timeRange,
  payload: timeRange
})