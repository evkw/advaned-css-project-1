import React from 'react'


const Header: any = props => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src="https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/logo-white.png?alt=media&token=c4e6eb8a-74ea-4eb0-9c26-282129162a72" alt="logo" className="header__logo"/>
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>

        <a href="#" className="btn btn--white btn--animated">Discover our tours</a>
      </div>
    </header>
  );
}

export default Header;