import React from 'react'
import Header from '../Layouts/Header';
import About from '../Layouts/About';
import Features from '../Layouts/Features';
import Tours from '../Layouts/Tours';
import Stories from '../Layouts/Stories';
import Book from '../Layouts/Book';
import Footer from '../Layouts/Footer';

import Navigation from '../Components/Navigation';

const Home: any = props => {

  return (
    <div>
      <Navigation/>
      <Header/>
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Book />
      </main>
      <Footer/>
    </div>
  )
}

export default Home