import React from 'react';
// import image from '../../assets/Images/blackpipe.jpeg';
// import guitar from '../../assets/Images/guitar.png';

import { Container, Image, Name, Role } from './styles';

function Card(props) {
  const { img, musicianName, role } = props;
  return (
    <Container>
      <Image src={img} alt="guitar" />
      <Name>{musicianName}</Name>
      <Role>{role}</Role>
    </Container>
  );
}

export default Card;
