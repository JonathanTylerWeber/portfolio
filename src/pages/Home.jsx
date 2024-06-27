import React from 'react'
import NavbarComp from '../components/NavbarComp';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavbarComp backgroundColor={'#76ABAE'} hoverColor={'#191f25'} />
      <Header />
      <Body />
      <Footer />
    </>
  )
}

export default Home