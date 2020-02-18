import React from 'react';
import YouTube from 'react-youtube';

export default function VideoClip(prop) {
  const { width, height } = prop;

  const opts = {
    height: height > 300 ? height : 300,
    width: width > 300 ? width : 300,
    playerVars: {
      autoplay: 1,
    },
  };

  const _onReady = event => {
    event.target.mute();
  };

  return <YouTube videoId="SzrcAoiBnuk" opts={opts} onReady={_onReady} />;
}
