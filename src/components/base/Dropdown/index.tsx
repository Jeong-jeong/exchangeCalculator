import React from 'react';
import { currenciesKeyType } from '@types';
import { currenciesKey } from '@utils/constants';

interface DropdownProps {
  currentItem: currenciesKeyType;
  setCurrentKey: React.Dispatch<React.SetStateAction<currenciesKeyType>>;
}

const Dropdown = ({ currentItem, setCurrentKey }: DropdownProps) => {
  const handleDropdownCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCurrency = e.currentTarget.value;
    setCurrentKey(selectedCurrency as currenciesKeyType);
  };

  return (
    <select name="currencyList" onChange={handleDropdownCurrency}>
      {Object.values(currenciesKey).map((nation) => (
        <option value={nation} selected={nation === currentItem} key={nation}>
          {nation}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
