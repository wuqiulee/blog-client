import React from 'react';
import ReactAplayer from 'react-aplayer';
import { AudioList } from '@/constants';
import { Wrapper } from './style';

const Player: React.FC = () => {
  const cofig = {
    theme: '#666',
    listFolded: true,
    listMaxHeight: '100px',
    lrcType: 3,
    audio: AudioList,
  };

  return (
    <Wrapper>
      <ReactAplayer {...cofig} />
    </Wrapper>
  );
};

export default Player;
