import { useState, useEffect } from 'react';
import { ICurrency, currenciesKeyType } from '@types';
import { TabHeader, CurrencyTab } from '@components/base';
import { useTabs } from '@hooks';
import { currenciesKey } from '@utils/constants';
import {
  addComma,
  numberWithRemoveComma,
  getRemovedUSDCurrencies,
  calcAndArrangeCurrency,
} from '@utils/functions';
import * as S from './Style';

interface CalculatorProps {
  quotes?: ICurrency['quotes'];
}

const Calculator = ({ quotes }: CalculatorProps) => {
  const { currentItem, setCurrentKey } = useTabs<typeof currenciesKey>({
    initialKey: currenciesKey.USD as currenciesKeyType,
    allTabs: currenciesKey,
  });
  const [inputValue, setInputValue] = useState(addComma('1000'));
  const [calcedCurrency, setCalcedCurrency] = useState(inputValue);

  useEffect(() => {
    const removedUSDCurrencies = getRemovedUSDCurrencies(quotes);

    const calcedResult = calcAndArrangeCurrency({
      inputValue: numberWithRemoveComma(inputValue),
      rate: removedUSDCurrencies[currentItem as currenciesKeyType],
    });
    setCalcedCurrency(calcedResult);
  }, [inputValue, quotes, currentItem]);

  return (
    <S.Wrapper>
      <TabHeader
        setInputValue={setInputValue}
        inputValue={inputValue}
        currentItem={currentItem as currenciesKeyType}
        setCurrentKey={setCurrentKey}
      />
      <CurrencyTab
        currentItem={currentItem as currenciesKeyType}
        calcedCurrency={calcedCurrency}
        setCurrentKey={setCurrentKey}
      />
    </S.Wrapper>
  );
};

export default Calculator;
