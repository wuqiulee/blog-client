import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Main from '@/components/Main';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Layout;
