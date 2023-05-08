import React from 'react';
import BurgerMenu from './BurgerMenu';


class Header extends React.Component {
  render() { 
    return (
      <header>
        <img id="main-logo" src="./img/logo.png" />
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
