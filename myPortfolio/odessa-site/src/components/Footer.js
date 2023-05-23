import React from "react";


class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer">
                    <div className="col-1">
                        <h3>Полезные ссылки:</h3>
                        <a href="">Наши услуги</a>
                        <a href="">О нас</a>
                        <a href="">Новости</a>
                        <a href="">История проекта</a>
                        <a href="">Наша команда</a>
                    </div>
                    <div className="col-2">
                        <h3>Оповещения</h3>
                        <form>
                            <input type="email" placeholder="Ваш Email адресс" required />
                            <br />
                            <button type="submit">Подписаться</button>
                        </form>
                    </div>
                    <div className="col-3">
                        <h3>
                            <div id="contact">Контакты:</div>
                        </h3>
                        <ul>
                            <li>Телефон: (xxx)xxx-xx-xx</li>
                            <li>Email: info@example.com</li>
                        </ul>
                        <div class="SocialMedia">
                            <a href="#" className="fa fa-instagram"></a>
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-twitter"></a>
                            <a href="#" className="fa fa-google"></a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;