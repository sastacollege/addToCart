//CREATE CONTEXT AND EXPORT
import React, { useState } from 'react';
const ProductContext = React.createContext();

//CREATE CONTEXT PROVIDER
// eslint-disable-next-line react/prop-types
const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContextProvider, ProductContext };
