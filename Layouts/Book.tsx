import React from 'react';

import HeadingSecondary from '../Components/HeadingSecondary';

const Book = props => {
  return (
     <section className="section-book">
          <div className="row">
              <div className="book">
                  <div className="book__form">
                      <form action="#" className="form">
                        <HeadingSecondary text="Book now"/>

                          <div className="form__group">
                              <label className="form__label">
                              Full name
                                <input type="text" className="form__input" placeholder="Full name" id="name" required />
                              </label>
                          </div>

                          <div className="form__group">
                              <label  className="form__label">
                              Email address
                              <input type="email" className="form__input" placeholder="Email address" id="email" required />
                              </label>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default Book;