import { memo, lazy, Suspense } from 'react'

const NavbarComp = lazy(() => import('../components/NavbarComp'));
const AboutBody = lazy(() => import('../components/AboutBody'));
const Footer = lazy(() => import('../components/Footer'));

const About = () => {
  return (
    <>
      <Suspense>
        <NavbarComp backgroundColor={'#222831'} hoverColor={'#8bced2'} />
      </Suspense>

      <Suspense>
        <AboutBody />
      </Suspense>

      <Suspense>
        <Footer />
      </Suspense>
    </>
  )
}

export default memo(About)