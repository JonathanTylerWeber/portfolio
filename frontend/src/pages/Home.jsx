import React, { memo, lazy, Suspense } from 'react';

const NavbarComp = lazy(() => import('../components/NavbarComp'));
const Header = lazy(() => import('../components/Header'));
const Body = lazy(() => import('../components/Body'));
const Footer = lazy(() => import('../components/Footer'));

const Home = () => {
  return (
    <>
      <Suspense >
        <NavbarComp backgroundColor={'#76ABAE'} hoverColor={'#191f25'} />
      </Suspense>

      <Suspense >
        <Header />
      </Suspense>

      <Suspense >
        <Body />
      </Suspense>

      <Suspense >
        <Footer />
      </Suspense>
    </>
  )
}

export default memo(Home);