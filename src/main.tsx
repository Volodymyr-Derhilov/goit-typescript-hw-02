import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "modern-normalize";
import App from './App'
import { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';

Modal.setAppElement('#root');

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Toaster position='top-right' toastOptions={{ duration: 2000 }} />
  </React.StrictMode>,
)
