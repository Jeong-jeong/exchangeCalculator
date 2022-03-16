import axios from 'axios';
import { ICurrency } from '@types';

const getMockCurrency = async () => {
  try {
    const { data } = await axios.get<ICurrency>('/currencyInfo.json');
    return data;
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export default getMockCurrency;
