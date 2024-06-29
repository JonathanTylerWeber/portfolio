import { memo, lazy, Suspense } from 'react'

const NavbarComp = lazy(() => import('../components/NavbarComp'));
const ContactBody = lazy(() => import('../components/ContactBody'));

const Contact = () => {
  return (
    <>
      <Suspense>
        <NavbarComp backgroundColor={'#222831'} hoverColor={'#8bced2'} />
      </Suspense>

      <Suspense>
        <ContactBody />
      </Suspense>
    </>
  )
}

export default memo(Contact)