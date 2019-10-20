import React from 'react';
import DummyText from '../Components/DummyText';

const Story = props => {
  const {story} = props;
  const {imgSrc, name, header} = story;

return (
    <div className="story">
      <figure className="story__shape">
        <img className="story__image" src={imgSrc} />
        <figcaption className="story__caption">{name}</figcaption>
      </figure>

      <div className="story__text">
          <h3 className="heading-tertiary u-margin-button-small">{header}</h3>
          <DummyText paragraphs={1} />
      </div>
    </div>
    )
}

export default Story;