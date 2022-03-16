import styled from 'styled-components';

export const TabList = styled.nav`
  display: flex;

  & > li {
    width: 100%;
    height: 50px;
  }

  & button {
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem;
    margin: 0;
  }
`;
