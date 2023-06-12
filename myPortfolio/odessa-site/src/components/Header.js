import React from 'react';
import BurgerMenu from './BurgerMenu';
// import logo from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/logo.png';


class Header extends React.Component {
  render() {


    return (
      <header>
        {/* <img id="main-logo" src={logo} alt="logo" /> */}
        <nav>
          <ul>
            <li>
              <a className="navigation-link" href="#history">
                История
              </a>
            </li>
            <li>
              <a className="navigation-link" href="#culture">
                Культура
              </a>
            </li>
            <li>
              <a className="navigation-link" href="#photoGallery">
                Фотогалерея
              </a>
            </li>
          </ul>
        </nav>

        <BurgerMenu />
      </header>
    );
  }
}

export default Header;