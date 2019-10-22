import React from 'react';

const Footer = props => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src="https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/logo-green-2x.png?alt=media&token=67a42976-a8be-4b1b-83a7-425dcf055c74" alt="Full logo" className="footer__logo"/>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
                <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Privacy Policy</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
              Designed by <a href="#" className="footer__link">Jonas Schmedtmann</a> for his online course <a href="#" className="footer__link">Advanced CSS and Sass</a>.
              Copyright &copy; by Jonas Schmedtmann.
              Built by <a href="#" className="footer__link">Evan Wallace</a>
          </p>
        </div>
      </div>

    </footer>
  )
}

export default Footer;