import React from 'react';
import BurgerMenu from './BurgerMenu';
import logo from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/logo.png'

class Header extends React.Component {
  render() {
    return (
      <header>
        <img id="main-logo" src={logo} alt='logo' />
        <nav>
          <ul>
            <li>
              <button className="navigation-button" onClick={() => window.location.href = "index.html"}>
                История
              </button>
            </li>
            <li>
              <button className="navigation-button" onClick={() => window.location.href = "index.html"}>
                Культура
              </button>
            </li>
            <li>
              <button className="navigation-button" onClick={() => window.location.href = "index.html"}>
                Фотогалерея
              </button>
            </li>
          </ul>
        </nav>
        <BurgerMenu />
      </header>
    );
  }
}

export default Header;