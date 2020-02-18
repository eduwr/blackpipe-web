import React, { useRef } from 'react';

import Header from '../../components/Header';
import MainImage from '../../components/MainImage';
import MainNews from '../../components/MainNews';
import Footer from '../../components/Footer';
import { Grid, Main } from './styles';

export default function() {
  const myRef = useRef(null);

  const scrollToRef = ref => ref.current.scrollIntoView({ behavior: 'smooth' });

  const executeScroll = () => scrollToRef(myRef);

  return (
    <Grid>
      <Header onContact={executeScroll} />
      <Main>
        <MainImage />
        <MainNews />
      </Main>
      <Footer footerRef={myRef} />
    </Grid>
  );
}
