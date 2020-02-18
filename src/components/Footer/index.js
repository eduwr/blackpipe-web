import React from 'react';

import logo from '../../assets/Logos/logo-pipe.svg';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  SpotifyIcon,
  DeezerIcon,
  YoutubeIcon,
} from '../Icons/index';

import {
  Container,
  Box,
  Image,
  ButtonBox,
  IconLink,
  IconBox,
  Text,
  StyledText,
  StyledBox,
} from './styles';

function Footer(prop) {
  const { footerRef } = prop;
  function handleClick(destiny) {
    const openWindow = url => window.open(url, '_blank');

    if (destiny === 'spotify') {
      openWindow(
        'https://open.spotify.com/artist/6dKLmBX0p8ggAxFcke0YKg?si=eldmZLJgSkqMGkUHr34mSg',
        '_blank'
      );
    } else if (destiny === 'youtube') {
      openWindow('https://www.youtube.com/channel/UCLWsrA9I53IngL1sDG2upQA');
    } else if (destiny === 'deezer') {
      openWindow('http://www.deezer.com/artist/7995840');
    } else {
      openWindow(`https://www.${destiny}.com/bandablackpipe/`, '_blank');
    }
  }
  return (
    <Container ref={footerRef}>
      <Box>
        <Image src={logo} alt="logo" />
      </Box>
      <Box>
        <Text>
          <b>Contato:</b> <br />
          blackpipe@gmail.com
        </Text>
      </Box>
      <StyledBox>
        <ButtonBox>
          <IconBox>
            <IconLink>
              <SpotifyIcon onClick={() => handleClick('spotify')} />
            </IconLink>
            <IconLink onClick={() => handleClick('deezer')}>
              <DeezerIcon />
            </IconLink>
            <IconLink onClick={() => handleClick('youtube')}>
              <YoutubeIcon />
            </IconLink>
          </IconBox>
          <IconBox>
            <IconLink onClick={() => handleClick('facebook')}>
              <FacebookIcon />
            </IconLink>
            <IconLink onClick={() => handleClick('instagram')}>
              <InstagramIcon />
            </IconLink>
            <IconLink onClick={() => handleClick('twitter')}>
              <TwitterIcon />
            </IconLink>
          </IconBox>
        </ButtonBox>
        <StyledText>
          Desenvolvido por <b>EduWR</b>
        </StyledText>
      </StyledBox>
    </Container>
  );
}

export default Footer;
