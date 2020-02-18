import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  align-items: initial;
  justify-content: center;
  width: 100%;
  background-color: grey;
  z-index: -1;
`;

export const Background = styled.div`
  background-image: url(${props => props.img});
  height: 950px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
`;

export const Box = styled.div`
  position: absolute;
  left: 0;
  height: 950px;
  width: 540px;
  background-color: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  @media (max-width: 540px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 50px;
  margin-top: 40px;
  margin-left: 25px;
`;

export const Text = styled.p`
  font-size: 20px;
  margin-top: 20px;
  margin-left: 25px;
  margin-right: 20px;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
`;
