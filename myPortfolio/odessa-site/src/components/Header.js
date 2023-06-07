import React from 'react';
import BurgerMenu from './BurgerMenu';
import logo from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/files/img/logo.png';
import ukTranslations from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/uk.json';
import ruTranslations from 'D:/JavaScriptProjects/myPortfolio/odessa-site/src/ru.json';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLanguage: 'ru', // Устанавливаем русский язык по умолчанию
      translations: ruTranslations, // Используем русские переводы по умолчанию
    };
  }

  handleLanguageToggle = () => {
    if (this.state.currentLanguage === 'ru') {
      this.setState({
        currentLanguage: 'uk', // Переключаем на украинский язык
        translations: ukTranslations, // Используем украинские переводы
      });
    } else {
      this.setState({
        currentLanguage: 'ru', // Переключаем на русский язык
        translations: ruTranslations, // Используем русские переводы
      });
    }
  };

  render() {
    const { currentLanguage, translations } = this.state;

    return (
      <header>
        <img id="main-logo" src={logo} alt="logo" />
        <nav>
          <ul>
            <li>
              <a className="navigation-link" onClick={() => window.location.href = "index.html"}>
                {translations.history}
              </a>
            </li>
            <li>
              <a className="navigation-link" onClick={() => window.location.href = "index.html"}>
                {translations.culture}
              </a>
            </li>
            <li>
              <a className="navigation-link" onClick={() => window.location.href = "index.html"}>
                {translations.photoGallery}
              </a>
            </li>
          </ul>
        </nav>
        <button onClick={this.handleLanguageToggle} className="translator-button">
          {currentLanguage === 'ru' ? 'UK' : 'RU'}
        </button>
        <BurgerMenu />
      </header>
    );
  }
}

export default Header;

