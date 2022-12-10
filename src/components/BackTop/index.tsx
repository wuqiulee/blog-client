import React, { useEffect, useState } from 'react';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import { BackTopWrapper } from './style';

const BackTop: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const backTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const scroll = () => {
      const { scrollTop } = document.documentElement;
      if (scrollTop > 150) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', scroll);

    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  return (
    <BackTopWrapper onClick={backTop} show={show}>
      <VerticalAlignTopOutlined />
    </BackTopWrapper>
  );
};

export default BackTop;
