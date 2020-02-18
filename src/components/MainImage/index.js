import React from 'react';
import image from '../../assets/Images/blackpipe.jpeg';
import { Image, Box } from './styles';

function BandImage() {
  return (
    <Box>
      <Image src={image} />
    </Box>
  );
}

export default BandImage;
