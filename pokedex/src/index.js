import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FavoriteProvider } from './pages/favorites/favoritesContext';
import reportWebVitals from './reportWebVitals';
import "./reset.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FavoriteProvider>
    <App />
  </FavoriteProvider>
);

reportWebVitals();
