import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Greeting from './Greeting.jsx';
import { FavoriteFood } from './FavoriteFood.jsx';
import { Relationship } from './Relationship.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Greeting />
      <FavoriteFood />
      <Relationship status="married" name="Doris" />
    </>
  </StrictMode>,
);
