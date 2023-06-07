import React from 'react';

class BurgerMenu extends React.Component {
    render() {
        return (
            <div className="burger-menu">
                <input id="menu-toggle" type="checkbox" />
                <label className="menu-btn" htmlFor="menu-toggle">
                    <span></span>
                </label>

                <ul className="menubox">
                    <li><a className="menu-item" href="#">Наши услуги</a></li>
                    <li><a className="menu-item" href="#">О нас</a></li>
                    <li><a className="menu-item" href="#">Новости</a></li>
                    <li><a className="menu-item" href="#">История проекта</a></li>
                    <li><a className="menu-item" href="#">Наша команда</a></li>
                    <li><a className="menu-item" href="#contact">Контакты</a></li>
                </ul>
            </div>
        );
    }
}

export default BurgerMenu;