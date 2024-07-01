import React, { memo } from 'react';

import NavbarComp from '../components/NavbarComp';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

import ScrollToTop from '../components/ScrollTop';

const Home = () => {

  ScrollToTop();

  return (
    <>
      <NavbarComp backgroundColor={'#76ABAE'} hoverColor={'#191f25'} />
      <Header />
      <Body />
      <Footer />
    </>
  )
}

export default memo(Home);