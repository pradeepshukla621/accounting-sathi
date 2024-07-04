import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'

import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import AboutUs from './components/AboutUs/AboutUs'
import './App.css'
import Feature from './components/Feature/Feature'
import Modal from './components/Modal/Modal'




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
      <Header />
      <Modal show={showModal} onClose={handleClose} />
      <Hero />
      <AboutUs />
      <Feature />
      
     


    </>
  )
}

export default App
