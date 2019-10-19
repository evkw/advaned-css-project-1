import React from 'react'
import Header from '../Layouts/Header';
import About from '../Layouts/About';
import Features from '../Layouts/Features';
import Tours from '../Layouts/Tours';
import Stories from '../Layouts/Stories';

const Home: any = props => {

  return (
    <div>
    <Header/>
    <main>
      <About />
      <Features />
      <Tours />
      <Stories />
    </main>
    </div>
  )
}

export default Home