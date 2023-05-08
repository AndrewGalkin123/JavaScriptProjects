import React from "react";

function Footer() {
    return (
        <div class="footer">
            <div class="col-1">
                <h3>Полезные ссылки:</h3>
                <a href="">Наши услуги</a>
                <a href="">О нас</a>
                <a href="">Новости</a>
                <a href="">История проекта</a>
                <a href="">Наша команда</a>
            </div>
            <div class="col-2">
                <h3>Оповещения</h3>
                <form>
                    <input type="email" placeholder="Ваш Email адресс" required />
                    <br />
                    <button type="submit">Подписаться</button>
                </form>
            </div>
            <div class="col-3">
                <h3>
                    <div id="contact">Контакты:</div>
                </h3>
                <ul>
                    <li>Телефон: (xxx)xxx-xx-xx</li>
                    <li>Email: info@example.com</li>
                </ul>
                <div class="SocialMedia">
                    <a href="#" class="fa fa-instagram"></a>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-google"></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;