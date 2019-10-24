import React from 'react'
import Header from '../Layouts/Header';
import About from '../Layouts/About';
import Features from '../Layouts/Features';
import Tours from '../Layouts/Tours';
import Stories from '../Layouts/Stories';
import Book from '../Layouts/Book';
import Footer from '../Layouts/Footer';
import Popup from '../Layouts/Popup';

import Navigation from '../Components/Navigation';

const Home: any = props => {

  return (
    <div>
      <Navigation/>
      <Header/>
      <main>
        <About />
        <Features />
        <Tours id="section-tours"/>
        <Stories />
        <Book />
      </main>
      <Footer/>
      <Popup id="popup"/>
    </div>
  )
}

export default Home