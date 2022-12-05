import React from 'react';
import { Outlet } from 'react-router-dom';
import UserCard from '@/components/UserCard';
import Player from '@/components/Player';
import EveryDay from '@/components/EveryDay';
import { Wrapper } from './style';

const Main = () => {
  return (
    <Wrapper>
      <div className="content">
        <Outlet />
      </div>
      <div className="silder">
        <UserCard />
        <Player />
        <EveryDay />
      </div>
    </Wrapper>
  );
};

export default Main;
