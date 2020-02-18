import React from 'react';

function Spotify(prop) {
  const { width, height } = prop;

  return (
    <iframe
      title="spotify"
      src="https://open.spotify.com/embed/artist/6dKLmBX0p8ggAxFcke0YKg"
      width={width > '300' ? width : '300'}
      height={height > '300' ? height : '300'}
      frameBorder="0"
      allowTransparency="true"
      allow="encrypted-media"
    />
  );
}

export default Spotify;
