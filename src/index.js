import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';


// ReactDOM.render(<App name="Ash" otherName="Misty"/>, document.getElementById('trainers'));

const root = createRoot(document.getElementById('root'));
root.render(<App />)
