import { StockDataKey } from "../constants";
import { CompanyReference, Logo, FiscalPeriodEarnings, CompanyData, CompanyDataAction } from "../types";

export const COMPANY_DATA_DEFAULT_STATE: CompanyData = {
  [StockDataKey.company]: {} as CompanyReference,
  [StockDataKey.logo]: {} as Logo,
  [StockDataKey.earnings]: {} as FiscalPeriodEarnings
}

export function companyDataReducer(state = COMPANY_DATA_DEFAULT_STATE, action: CompanyDataAction) {
  return {
    ...state,
    [action.type]: action.payload
  }
}