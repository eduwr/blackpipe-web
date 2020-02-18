import styled from 'styled-components';

import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaSpotify, FaYoutube } from 'react-icons/fa';
import DeezerIconEd from './deezer/deezer';

export const FacebookIcon = styled(FaFacebookF)`
  fill: #c4c4c4;
  cursor: pointer;
  font-size: 35px;
`;

export const InstagramIcon = styled(AiOutlineInstagram)`
  fill: #c4c4c4;
  cursor: pointer;
  font-size: 50px;
`;

export const TwitterIcon = styled(AiOutlineTwitter)`
  fill: #c4c4c4;
  cursor: pointer;
  font-size: 50px;
`;

export const SpotifyIcon = styled(FaSpotify)`
  fill: #c4c4c4;
  cursor: pointer;
  font-size: 40px;
`;

export const YoutubeIcon = styled(FaYoutube)`
  fill: #c4c4c4;
  cursor: pointer;
  font-size: 40px;
`;

export const DeezerIcon = styled(DeezerIconEd)`
  cursor: pointer;
`;
