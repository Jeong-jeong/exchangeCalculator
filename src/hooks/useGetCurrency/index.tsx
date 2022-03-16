import { useAsync } from 'react-async';
import { ICurrency } from '@types';
import { getCurrencyApi, getMockCurrency } from '@apis';

type useGetCurrencyType = ICurrency | undefined;

const useGetCurrency = (): useGetCurrencyType => {
  const { data, error, isLoading } = useAsync({ promiseFn: getCurrencyApi });
  const {
    data: mockData,
    error: mockDataError,
    isLoading: mockDataLoading,
  } = useAsync({ promiseFn: getMockCurrency });
  return !data || error ? mockData : data;
};

export default useGetCurrency;
