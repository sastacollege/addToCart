import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ProductContextProvider } from './context/ProductContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductContextProvider>
);
