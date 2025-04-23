// Serves as the entry point of the application.
// Imports necessary modules and styles.
// Renders the App component into the DOM's root element.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));- //This finds the HTML element with the ID `root` in `public/index.html`
root.render(//Tells React to render the JSX (<App />) into the root container
  <React.StrictMode> 
  {/* helps find potential problems in the app */}
    <App />   
  
  </React.StrictMode>
);

reportWebVitals();
