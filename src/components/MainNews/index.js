import React, { useEffect, useState } from 'react';
import { Grid, NewsText, StyledDiv, SquareDiv } from './styles';
import YouTube from '../YouTube';
import Spotify from '../Spotify';

function MainNews() {
  const [windowSize, setWindowSize] = useState({});

  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    setWindowSize(getSize());
    window.addEventListener('resize', () => setWindowSize(getSize));
    return window.removeEventListener('resize', () => setWindowSize(getSize));
  }, []);

  return (
    <>
      <Grid col="12" height="180px">
        <StyledDiv>
          <NewsText>Novo Single</NewsText>
          <NewsText big>Chinelo sem par</NewsText>
        </StyledDiv>
      </Grid>
      <Grid col={6} height="auto" mediaBox>
        <SquareDiv size={0.25 * windowSize.width}>
          <Spotify
            width={0.22 * windowSize.width}
            height={0.22 * windowSize.width}
          />
        </SquareDiv>
        <SquareDiv size={0.25 * windowSize.width}>
          <YouTube
            width={0.22 * windowSize.width}
            height={0.22 * windowSize.width}
          />
        </SquareDiv>
      </Grid>
    </>
  );
}

export default MainNews;
