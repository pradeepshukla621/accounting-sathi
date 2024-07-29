import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'

import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import AboutUs from './components/AboutUs/AboutUs'
import './App.css'
import Feature from './components/Feature/Feature'
import Modal from './components/Modal/Modal'
import Need from './components/Need/Need'
import Testimonial from './components/Testimonial/Testimonial'
import Pricing from './components/Pricing/Pricing'
import Footer from './components/Footer/Footer'
import QuoteForm from './components/QuoteForm/QuoteForm'
import SocialMediaBar from './components/SocialMediaBar/SocialMediaBar'





function App() {
  const [count, setCount] = useState(0);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <SocialMediaBar />
      <Header setShowModal={setShowModal}/>
      <Modal show={showModal} onClose={handleClose} />
      <Hero setShowModal={setShowModal}/>
      <AboutUs />
      <Feature />
      <Need />
      <Testimonial />
      <Pricing />
      <QuoteForm />
      <Footer />


    </>
  )
}

export default App
