import React from 'react';
import { currenciesKeyType } from '@types';
import { TabNav } from '@components/base';
import { getDate } from '@utils/functions';
import * as S from './Style';

interface CurrencyTabProps {
  currentItem: currenciesKeyType;
  calcedCurrency: string;
  setCurrentKey: React.Dispatch<React.SetStateAction<currenciesKeyType>>;
}

const CurrencyTab = ({
  currentItem,
  calcedCurrency,
  setCurrentKey,
}: CurrencyTabProps) => {
  return (
    <S.Tab>
      <TabNav currentItem={currentItem} setCurrentKey={setCurrentKey} />
      <S.TabContents>
        <S.CurrencyResult>
          {currentItem}: {calcedCurrency}
        </S.CurrencyResult>
        <p>기준일: {getDate(new Date())}</p>
      </S.TabContents>
    </S.Tab>
  );
};

export default CurrencyTab;
