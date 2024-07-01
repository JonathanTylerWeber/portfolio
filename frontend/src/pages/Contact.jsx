import { memo } from 'react'

import NavbarComp from '../components/NavbarComp';
import ContactBody from '../components/ContactBody';

import ScrollToTop from '../components/ScrollTop';

const Contact = () => {

  ScrollToTop();

  return (
    <>
      <NavbarComp backgroundColor={'#222831'} hoverColor={'#8bced2'} />
      <ContactBody />
    </>
  )
}

export default memo(Contact)