import { IQuotes, IRemovedQuotes, IinitObject } from '@types';

export type returnGetRemovedUSDType = IRemovedQuotes | IinitObject;

export const getRemovedUSDCurrencies = (
  quotes: IQuotes | undefined
): returnGetRemovedUSDType => {
  return quotes
    ? Object.entries(quotes).reduce<returnGetRemovedUSDType>((prev, cur) => {
        const [currency, rate] = cur;
        const deletedUSD = currency.slice(3, 6);
        prev[deletedUSD as keyof IRemovedQuotes] = rate;
        return prev;
      }, {})
    : {};
};

export const getDate = (dateObject: Date) => {
  const [date, month, day, year] = dateObject.toDateString().split(' ');
  return `${year}-${month}-${day}`;
};

export const removeKorean = (string: string) => {
  const notNumberReg = /[^0-9]/g;
  return string.replace(notNumberReg, '');
};

export const putOneStartWithZero = (string: string) => {
  const isStartWithZero = /^0/g;
  return string.replace(isStartWithZero, '10');
};

export const addComma = (string: string) => {
  const addedCommaString = string.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
  return addedCommaString;
};

export const numberWithRemoveComma = (string: string) => {
  const addedCommaString = string.replace(/,/g, '');
  return +addedCommaString;
};

interface calcAndArrangeCurrencyProps {
  inputValue: number;
  rate: number;
}

export const resetInputCurrency = (inputValue: string) => {
  const removedKorean = removeKorean(inputValue);
  const resetStartedOne = putOneStartWithZero(removedKorean);
  const addedCommaValue = addComma(resetStartedOne);
  return addedCommaValue;
};

export const calcAndArrangeCurrency = ({
  inputValue,
  rate,
}: calcAndArrangeCurrencyProps) => {
  const calcedResult = inputValue * rate;
  return addComma(calcedResult.toFixed(2));
};
