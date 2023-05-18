import React from "react";
import { Container } from 'react-bootstrap'

class Footer extends React.Component {
    render() {
        return (
            <Container fluid style={{ backgroundColor: '#212529', color: '#fff', height: '600px', marginTop: '500px' }}>
                <Container style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
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
                            
                        </div>
                    </div>
                </Container>
            </Container>
        )
    }
}

export default Footer;