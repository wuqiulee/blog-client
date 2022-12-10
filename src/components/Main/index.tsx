import React from 'react';
import { Outlet } from 'react-router-dom';
import HeadBg from '../HeadBg';
import UserCard from '@/components/UserCard';
import Player from '@/components/Player';
import EveryDay from '@/components/EveryDay';
import BackTop from '@/components/BackTop';
import { Wrapper } from './style';

const Main: React.FC = () => {
  return (
    <Wrapper>
      <HeadBg />
      <div className="mainWrap">
        <div className="contentWrap">
          <Outlet />
        </div>
        <div className="silder">
          <UserCard />
          <Player />
          <EveryDay />
        </div>
      </div>
      <BackTop />
    </Wrapper>
  );
};

export default Main;
