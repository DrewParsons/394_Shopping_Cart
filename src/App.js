import React from 'react';
import ProductTable from './Components/ProductTable'

const App = ({products}) => {
  const images = ""
  return (
      <ProductTable products={products} images={images}/>
    );
};

export default App;