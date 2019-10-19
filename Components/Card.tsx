import React from 'react';

const Card = props => {

  const {tour} = props;
  const {theme, heading, features, price}= tour;

  const cardSideFrontClass = `card__side card__side--front card__side--front-${theme}`;
  const cardSideBackClass = `card__side card__side--back card__side--back-${theme}`;
  const cardPictureClass = `card__picture card__picture--${theme}`;
  const headerSpanClass = `card__heading-span card__heading-span--${theme}`
  return (
    <div className="card">
      <div className={cardSideFrontClass}>
        <div className={cardPictureClass}>

        </div>
        <h4 className="card__heading">
          <span className={headerSpanClass}>{heading}</span>
        </h4>

        <div className="card__details">
          <ul>
            {features.map(feature => <li>{feature}</li>)}
          </ul>
        </div>
      </div>

       <div className={cardSideBackClass}>
        <div className="card__cta">
            <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">${price}</p>
            </div>

            <a href="#" className="btn btn--white">Book Now!</a>
        </div>
      </div>
    </div>
  );
}

export default Card;