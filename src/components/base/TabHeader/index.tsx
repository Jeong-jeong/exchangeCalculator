import React from 'react';
import { currenciesKeyType } from '@types';
import { Dropdown } from '@components/base';
import { resetInputCurrency } from '@utils/functions';
import * as S from './Style';

interface TabHeaderProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  currentItem: currenciesKeyType;
  setCurrentKey: React.Dispatch<React.SetStateAction<currenciesKeyType>>;
}

const TabHeader = ({
  inputValue,
  setInputValue,
  currentItem,
  setCurrentKey,
}: TabHeaderProps) => {
  const handleInputCurrency = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    const resetInput = resetInputCurrency(inputValue);

    setInputValue(resetInput);
  };

  return (
    <S.Header>
      <input
        type="text"
        aria-label="금액 입력"
        onChange={handleInputCurrency}
        value={inputValue}
        placeholder={'0'}
        required
      />
      <Dropdown currentItem={currentItem} setCurrentKey={setCurrentKey} />
    </S.Header>
  );
};

export default TabHeader;
