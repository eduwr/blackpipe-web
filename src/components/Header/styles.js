import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  width: 100%;
  background-color: #000;
  @media (max-width: 950px) {
    flex-direction: column;
    height: 250px;
    justify-content: center;
  }
`;

export const Div = styled.div``;

export const Box = styled.div`
  margin-left: 10px;
  @media (max-width: 950px) {
    margin-bottom: 5px;
    margin-top: 5px;
  }
`;

export const Image = styled.img`
  height: 100px;
  @media (max-width: 950px) {
    height: 80px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  @media (max-width: 950px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  align-self: center;
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
  color: #c4c4c4;
  padding: 15px 25px;
  border: 1px solid #000;
  cursor: pointer;
  &:hover {
    color: #526182;
    border: 1px solid #526182;
  }
  @media (max-width: 950px) {
    font-size: 24px;
    align-items: stretch;
    padding: 8px 100%;
    margin-bottom: 5px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-self: stretch;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #c4c4c4;
  border-radius: 5px;
  margin-right: 15px;
  height: 50px;
  width: 50px;
  &:hover {
    background: #526182;
  }
`;

export const IconBox = styled.div`
  display: flex;
  margin-left: 10px;
  padding: 0;
  align-items: center;
  justify-content: center;
  @media (max-width: 950px) {
    display: none;
  }
`;
