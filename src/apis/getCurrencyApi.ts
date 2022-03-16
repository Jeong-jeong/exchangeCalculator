import axios from 'axios';
import { API_END_POINT, API_ACCESS_KEY } from '@utils/constants';
import { ICurrency } from '@types';

const getCurrencyApi = async () => {
  try {
    const { data } = await axios.get<ICurrency>(
      `${API_END_POINT}live?access_key=${API_ACCESS_KEY}&currencies=USD,CAD,KRW,HKD,JPY,CNY&format=1`
    );
    return data;
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export default getCurrencyApi;
