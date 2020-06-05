import { CoreDataKey } from "../constants";
import { CoreData, IexKeyStats, CoreDataAction } from "../types";

export const CORE_DATA_DEFAULT_STATE: CoreData = Object.freeze({
  [CoreDataKey.historicalPrices]: [],
  [CoreDataKey.intradayPrices]: [],
  [CoreDataKey.summaryStats]: {} as IexKeyStats,
})

export function coreDataReducer(state = CORE_DATA_DEFAULT_STATE, action: CoreDataAction) {
  return {
    ...state,
    [action.type]: action.payload
  }
} 
