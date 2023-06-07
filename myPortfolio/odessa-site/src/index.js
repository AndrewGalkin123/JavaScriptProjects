import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import 'jquery';
import App from "./App"
import "./css/main.css"
import "./css/burger-menu.css"
import './css/header.css'
import './css/footer.css'



const app = ReactDOMClient.createRoot(document.getElementById("app"))
app.render(<App />)
