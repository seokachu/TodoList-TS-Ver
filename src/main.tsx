// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyle from './styles/GlobalStyle.ts';
import 'react-toastify/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <>
    <App />
    <GlobalStyle />
    <ToastContainer />
  </>
  // </React.StrictMode>
);
