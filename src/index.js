import React from 'react';
import { createRoot } from 'react-dom/client';
import reactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


// ReactDOM.render(<App name="Ash" otherName="Misty"/>, document.getElementById('trainers'));
reactDom.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
, document.querySelector("#root")
)
