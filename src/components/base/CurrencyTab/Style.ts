import styled from 'styled-components';

export const Tab = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`;

export const TabContents = styled.div`
  height: 60%;
  padding: 30px;
  border: 2px solid var(--color-table);
`;

export const CurrencyResult = styled.strong`
  display: inline-block;
  font-size: 25px;
  margin-bottom: 10px;
`;
