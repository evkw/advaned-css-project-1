import React from 'react';
import Card from '../Components/Card';
import HeadingSecondary from '../Components/HeadingSecondary';

const Tours = props => {

  const tours = [
    {
      heading: 'The Sea Explorer',
      theme: 'secondary',
      features: ['3 day tour', 'Up to 30 people', '2 tour guides', 'Sleep in cozy hostels', 'Difficulty: very easy'],
      price: 297
    },
    {
      heading: 'The Forest Hiker',
      theme: 'primary',
      features: ['7 day tour', 'Up to 40 people', '6 tour guides', 'Sleep in provided tents', 'Difficulty: medium'],
      price: 500
    },
    {
      heading: 'The Snow Adventurer',
      theme: 'tertiary',
      features: ['5 day tour', 'Up to 15 people', '3 tour guides', 'Sleep in provided tents', 'Difficulty: hard'],
      price: 500
    }
  ]
  return(
    <section className="section-tours" id={props.id}>
    <HeadingSecondary text=" Most Popular tours" />

        <div className="row">
        {tours.map(tour => {
          return (
            <div className="col-1-of-3">
             <Card tour={tour}/>
          </div>
          )
        })}
        </div>

        <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn btn--green">Discover all tours</a>
        </div>
    </section>
  )
}
export default Tours;