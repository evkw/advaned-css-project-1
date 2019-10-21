import React from 'react';

const HeadingSecondary = props => {
  return (
    <div className="u-center-text u-margin-bottom-medium">
        <h2 className="heading-secondary">
            {props.text}
        </h2>
    </div>
  )
}

export default HeadingSecondary;