import styled from 'styled-components';

export const Container = styled.div`
  height: 310px;
  width: 150px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  background: linear-gradient(
    102.14deg,
    rgba(46, 46, 44, 0.5) 0%,
    rgba(82, 97, 130, 0.5) 100%
  );
  &:hover {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  }
`;

export const Image = styled.img`
  height: 250px;
  width: 150px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  line-height: 22px;
  margin-top: 5px;
  margin-left: 10px;
`;

export const Role = styled.p`
  font-size: 12px;
  font-weight: normal;
  line-height: 15px;
  margin-top: 2px;
  margin-left: 10px;
`;
