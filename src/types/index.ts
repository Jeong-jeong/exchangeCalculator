import { currenciesKey } from '@utils/constants';

export interface ICurrency {
  success: boolean;
  terms?: string;
  privacy?: string;
  timestamp: number;
  source: string;
  quotes: {
    USDUSD: number;
    USDCAD: number;
    USDKRW: number;
    USDHKD: number;
    USDJPY: number;
    USDCNY: number;
  };
}

export interface IQuotes {
  USDUSD: number;
  USDCAD: number;
  USDKRW: number;
  USDHKD: number;
  USDJPY: number;
  USDCNY: number;
}

export interface IRemovedQuotes {
  USD: number;
  CAD: number;
  KRW: number;
  HKD: number;
  JPY: number;
  CNY: number;
}

export interface IinitObject {
  [key: string]: number;
}

export type currenciesKeyType = keyof typeof currenciesKey;
