import React from 'react';
// import image from '../../assets/Images/blackpipe.jpeg';
import image from '../../assets/Images/bio-bkg.png';
import { Main, Box, Background, Title, Text, Wrapper } from './styles';
import Card from '../Card';
import guitar from '../../assets/Images/guitar.png';
import drums from '../../assets/Images/drums.png';
import bass from '../../assets/Images/bass.png';

const members = [
  {
    name: 'Rene Singer',
    avatar: guitar,
    role: 'Guitarrista/ produtor',
    key: 1,
  },
  { name: 'Caio Villapol', avatar: drums, role: 'Baterista', key: 2 },
  { name: 'Edu Wronscki', avatar: bass, role: 'Baixista', key: 3 },
];

const paragraph = [
  {
    id: 1,
    text:
      'Formada em 2012, tem como sonoridade musical as influências do rock britânico com letras em português.',
  },

  {
    id: 2,
    text:
      'Em 2015, lançou seu primeiro EP "Vizinho Irlandês", masterizado em Londres no Estúdio Abbey Road pelos produtores musicais Simons Gibson e Alex Warthon. Apesar de breve o tempo na estrada, o grupo já dividiu palco com grandes bandas e artistas nacionais e internacionais como Criolo, Capital Inicial, Paralamas do Sucesso, Jason Mraz, Stevie Wonder e Edu K (Defalla).',
  },
  {
    id: 3,
    text:
      'Com ritmo e estilo, nossa música vai fazer você dançar em qualquer evento. Temos uma seleção musical cheia de hits de sucesso, com canções perfeitas para ouvir todos os dias ou fazer você dançar até amanhecer, tenha certeza de que vamos surpreender.',
  },
];

function MainBio() {
  return (
    <Main>
      <Background img={image} />
      <Box>
        <Title>Bio</Title>
        {paragraph.map(curr => {
          return <Text key={curr.id}>{curr.text}</Text>;
        })}
        <Wrapper>
          {members.map(curr => {
            const { key, avatar, role, name } = curr;
            return (
              <Card key={key} img={avatar} role={role} musicianName={name} />
            );
          })}
        </Wrapper>
      </Box>
    </Main>
  );
}

export default MainBio;
