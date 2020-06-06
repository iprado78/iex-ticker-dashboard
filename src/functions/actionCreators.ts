import { ActiveTickerAction } from "../types";
import { UiStateKey } from "../constants";

export const activeTickerAction = (ticker: string): ActiveTickerAction => ({
  type: UiStateKey.activeTicker,
  payload: ticker
})