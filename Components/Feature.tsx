import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DummyText from '../Components/DummyText';

const Feature = props => {
  const {heading, icon} = props;
  return (
    <div className="feature-box">
          <FontAwesomeIcon className="feature-box__icon fill-gradient-linear" icon={icon} />
          <h3 className="heading-tertiary u-margin-bottom-small">{heading}</h3>
          <DummyText className="feature-box__text" words={10}/>
    </div>
  )
}

export default Feature;