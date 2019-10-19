import React from 'react';
import DummyText from '../Components/DummyText';

const Stories = props => {

 return(
    <section className="section-stories">
      <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary"> 
            We make people genuinely happy
          </h2>
        </div>

        <div className="row">
          <div className="story">
          <figure className="story__shape">
            <img className="story__image" src="https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/nat-8.jpg?alt=media&token=81684add-4aad-47e1-b8af-b57646f6e9d2" />
          </figure>

          <div className="story__text">
              <h3 className="heading-tertiary u-margin-button-small">I had the best week ever with my family</h3>
              <DummyText paragraphs={1} />
          </div>
          </div>
        </div>
       
    </section>
  )
}

export default Stories;