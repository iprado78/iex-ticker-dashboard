import { StockType, StockDataKey } from "../constants";

export interface CompanyReference {
  "symbol": string;
  "companyName": string;
  "exchange": string;
  "issueType": StockType;
  "description": string;
}

export interface Logo {
  "url": string;
}

export interface FiscalPeriodEarnings {
  "actualEPS": number,
  "consensusEPS": number,
  "announceTime": string,
  "numberOfEstimates": number,
  "EPSSurpriseDollar": number,
  "EPSReportDate": string,
  "fiscalPeriod": string,
  "fiscalEndDate": string,
  "yearAgo": number,
  "yearAgoChangePercent": number
}

export interface CompanyData {
  [StockDataKey.company]: CompanyReference;
  [StockDataKey.logo]: Logo;
  [StockDataKey.earnings]: FiscalPeriodEarnings;
}