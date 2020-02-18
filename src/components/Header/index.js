import React from 'react';

import logo from '../../assets/Logos/logo-text.svg';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../Icons';

import {
  Container,
  Box,
  List,
  StyledLink,
  Image,
  Navigation,
  IconLink,
  IconBox,
} from './styles';

function NavBar(prop) {
  const { onContact } = prop;
  function handleClick(destiny) {
    window.open(`https://www.${destiny}.com/bandablackpipe/`, '_blank');
  }

  function handleContact() {
    onContact();
  }

  return (
    <Container>
      <Box>
        <Image src={logo} alt="logo" />
      </Box>
      <Box>
        <Navigation>
          <List>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/bio">Bio</StyledLink>
            <StyledLink onClick={handleContact}> Contato</StyledLink>
          </List>
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
        </Navigation>
      </Box>
    </Container>
  );
}

export default NavBar;
