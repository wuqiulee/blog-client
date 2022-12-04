import React from 'react';
import { Outlet } from 'react-router-dom';
import UserCard from '@/components/UserCard';
import { Wrapper } from './style';

const Main = () => {
  return (
    <Wrapper>
      <div className="content">
        <Outlet />
      </div>
      <div className="silder">
        <UserCard />
      </div>
    </Wrapper>
  );
};

export default Main;
