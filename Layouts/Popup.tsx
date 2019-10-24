import React from 'react';
import DummyText from '../Components/DummyText';

const Popup = props => {
  return (
    <div className="popup" id={props.id}>

        <div className="popup__content">
            <div className="popup__left">
              <img src="https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/nat-8.jpg?alt=media&token=81684add-4aad-47e1-b8af-b57646f6e9d2" className="popup__img"/>
              <img src="https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/nat-9.jpg?alt=media&token=c924b164-24f1-49cc-bad6-f27cf9be12ab" className="popup__img"/>
            </div>

            <div className="popup__right">
            <a href="#section-tours" className="popup__close">&times;</a>
              <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
              <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
              <DummyText className="popup__text" paragraphs={1}/>
              <a href="#" className="btn btn--green">Book now</a>
            </div>
        </div>

    </div>
  )
}

export default Popup;