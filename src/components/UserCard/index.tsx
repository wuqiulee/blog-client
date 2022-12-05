import React from 'react';
import { EnvironmentOutlined, GithubOutlined, HomeOutlined } from '@ant-design/icons';
import { Wrapper } from './style';
import avatar from '@/assets/images/avatar.jpg';

const UserCard = () => {
  return (
    <Wrapper>
      <header>
        <img src={avatar} alt="" />
      </header>
      <div className="main">
        <div className="nickName">wuqiulee</div>
        <section>东华理工大学</section>
        <section>计算机科学与技术</section>
        <section>⌨️ Make a little progress every day !</section>
        <section>
          <EnvironmentOutlined />
          &nbsp;Hangzhou, China
        </section>
      </div>
      <footer>
        <a href="/">
          <GithubOutlined />
        </a>
        <a href="/">
          <HomeOutlined />
        </a>
      </footer>
    </Wrapper>
  );
};

export default UserCard;
