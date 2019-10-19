import React from 'react'
import DummyText from '../Components/DummyText';


const About: any = props => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary"> 
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className="row">

        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
          <DummyText className="paragraph" sentances={5}/>
          <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
          <DummyText className="paragraph" sentances={3}/>

          <a href="#" className="btn-text">Learn more &rarr;</a>
        </div>

         <div className="col-1-of-2">
          <div className="composition">
            <img 
              className="composition__photo composition__photo--p1" 
              src="https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/nat-1-large.jpg?alt=media&token=48ba60a9-6fed-4f4f-8e29-5554b4609a02" 
              alt="Photo 1"/>
            <img 
              className="composition__photo composition__photo--p2" 
              src="https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/nat-2-large.jpg?alt=media&token=3e5288a0-20da-486f-b2fb-040da34f9b71" 
              alt="Photo 2"/>
            <img 
              className="composition__photo composition__photo--p3" 
              src="https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/nat-3-large.jpg?alt=media&token=0bd70d17-270c-40b0-9f45-a8317b8133ec" 
              alt="Photo 3"/>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default About;