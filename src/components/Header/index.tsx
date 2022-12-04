import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { NavList } from '@/constants';
import { Wrapper } from './style';

const Header = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="logo">
          <NavLink to="/">wuqiulee's blog</NavLink>
        </div>
        <div className="nav">
          {NavList.map(({ name, path }) => (
            <NavLink key={path} to={path}>
              {name}
            </NavLink>
          ))}
        </div>
        <div className="btn">
          <NavLink to="/">
            <HomeOutlined />
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
