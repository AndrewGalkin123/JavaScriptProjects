import React from 'react';
import BurgerMenu from './BurgerMenu';
import logo from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/img/logo.png'

class Header extends React.Component {
  render() { 
    return (
      <header>
        <img id="main-logo" src={logo} alt='logo'/>
        <nav>
          <ul>
            <li>
              <button class="navigation-button" onClick={() => window.location.href = "index.html"}>
                Экскурсии
              </button>
            </li>
            <li>
              <button class="navigation-button" onClick={() => window.location.href = "index.html"}>
                История
              </button>
            </li>
            <li>
              <button class="navigation-button" onClick={() => window.location.href = "index.html"}>
                Культура
              </button>
            </li>
          </ul>
          <BurgerMenu />
        </nav>
      </header>
    );
  }
}

export default Header;
