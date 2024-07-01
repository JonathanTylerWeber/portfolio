import { memo } from 'react'

import NavbarComp from '../components/NavbarComp';
import AboutBody from '../components/AboutBody';
import Footer from '../components/Footer';

import ScrollToTop from '../components/ScrollTop';

const About = () => {

  ScrollToTop();

  return (
    <>
      <NavbarComp backgroundColor={'#222831'} hoverColor={'#8bced2'} />
      <AboutBody />
      <Footer />
    </>
  )
}

export default memo(About)