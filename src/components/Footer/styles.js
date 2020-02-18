import styled from 'styled-components';

export const Container = styled.footer`
  height: 150px;
  width: 100%;
  background-color: #000;
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  align-items: center;
  justify-content: center;
  @media (max-width: 950px) {
    height: 180px;
    grid-template-columns: 1fr;
  }
`;

export const Box = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  height: 100px;
  width: 100px;
  text-decoration-color: #fff;
  margin-left: 30px;
  @media (max-width: 950px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #c4c4c4;
  border-radius: 5px;
  height: 50px;
  width: 50px;
  &:hover {
    background: #526182;
  }
`;

export const IconBox = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  @media (max-width: 950px) {
    margin-top: 10px;
  }
`;

export const Text = styled.p`
  font-size: 15px;
  justify-content: center;
  text-align: center;
  color: #c4c4c4;
`;

export const StyledText = styled(Text)`
  text-align: end;
  font-size: 12px;
  color: #c4c4c4;
  margin-top: 30px;
  margin-right: 70px;
  font-weight: lighter;
`;

export const StyledBox = styled(Box)`
  flex-direction: column;
`;
