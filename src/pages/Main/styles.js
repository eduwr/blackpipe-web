import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 150px 1fr 150px;
  @media (max-width: 950px) {
    grid-template-rows: 250px 1fr 180px;
  }
`;

export const Main = styled.main``;
