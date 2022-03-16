import { Calculator } from '@components/domain';
import { useGetCurrency } from '@hooks';

const HomePage = () => {
  const currency = useGetCurrency();

  return (
    <>
      <Calculator quotes={currency?.quotes} />
    </>
  );
};

export default HomePage;
