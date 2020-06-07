import { getCompanyRef, getLogo, getEarnings } from "./IexClient";
import { StockDataKey } from "../constants";
import { UiState, CompanyDataAction, CompanyRefAction, LogoAction, EarningsAction } from "../types";

interface CompanyDataUpdateParams {
  uiState: UiState,
  dispatch: React.Dispatch<CompanyDataAction>
}

export function hydrateCompanyData(params: CompanyDataUpdateParams) {
  hydrateLogo(params)
  hydrateCompanyRef(params)
  hydrateEarnings(params)
}

function hydrateCompanyRef({ uiState, dispatch }: CompanyDataUpdateParams) {
  const { activeTicker } = uiState
  getCompanyRef(activeTicker)
    .then(res =>
      dispatch({
        type: StockDataKey.company,
        payload: res
      } as CompanyRefAction)
    )
}

function hydrateLogo({ uiState, dispatch }: CompanyDataUpdateParams) {
  const { activeTicker } = uiState
  getLogo(activeTicker)
    .then(res => {
      dispatch({
        type: StockDataKey.logo,
        payload: res
      } as LogoAction)
    })
}

function hydrateEarnings({ uiState, dispatch }: CompanyDataUpdateParams) {
  const { activeTicker } = uiState
  getEarnings(activeTicker)
    .then(res =>
      dispatch({
        type: StockDataKey.earnings,
        payload: res
      } as EarningsAction)
    )
}