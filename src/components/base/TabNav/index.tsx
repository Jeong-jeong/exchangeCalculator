import React from 'react';
import { currenciesKeyType } from '@types';
import { currenciesKey } from '@utils/constants';
import * as S from './Style';

interface TabNavProps {
  currentItem: currenciesKeyType;
  setCurrentKey: React.Dispatch<React.SetStateAction<currenciesKeyType>>;
}

const TabNav = ({ currentItem, setCurrentKey }: TabNavProps) => {
  const handleClickCurrency = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentKey(e.currentTarget.value as currenciesKeyType);
  };

  return (
    <S.TabList>
      {Object.values(currenciesKey).map((nation) =>
        nation !== currentItem ? (
          <li key={nation}>
            <button onClick={handleClickCurrency} value={nation as string}>
              {nation}
            </button>
          </li>
        ) : (
          ''
        )
      )}
    </S.TabList>
  );
};

export default TabNav;
