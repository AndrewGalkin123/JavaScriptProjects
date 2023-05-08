import React from 'react';

function BurgerMenu() {
    return (
        <div class="burger-menu">
            <input id="menu-toggle" type="checkbox" />
            <label class="menu-btn" for="menu-toggle">
                <span></span>
            </label>

            <ul class="menubox">
                <li><a class="menu-item" href="#">Наши услуги</a></li>
                <li><a class="menu-item" href="#">О нас</a></li>
                <li><a class="menu-item" href="#">Новости</a></li>
                <li><a class="menu-item" href="#">История проекта</a></li>
                <li><a class="menu-item" href="#">Наша команда</a></li>
                <li><a class="menu-item" href="#contact">Контакты</a></li>
            </ul>
        </div>
    );
}

export default BurgerMenu;