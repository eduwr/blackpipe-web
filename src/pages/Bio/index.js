import React, { useRef } from 'react';

import Header from '../../components/Header';
import MainBio from '../../components/MainBio';
import Footer from '../../components/Footer';
import { Grid } from './styles';

export default function() {
  const myRef = useRef(null);

  const scrollToRef = ref => ref.current.scrollIntoView({ behavior: 'smooth' });
  const executeScroll = () => scrollToRef(myRef);

  return (
    <Grid>
      <Header onContact={executeScroll} />
      <MainBio />
      <Footer footerRef={myRef} />
    </Grid>
  );
}
