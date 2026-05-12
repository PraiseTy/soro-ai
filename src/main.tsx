import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { AuthCard } from './components';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <AuthCard />
  </StrictMode>
);
