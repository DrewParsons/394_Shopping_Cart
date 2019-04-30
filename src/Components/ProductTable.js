import React, { Component } from "react";
import Card from './Card'

const ProductTable = ({products, images}) => {
  const skus = Object.keys(products);
  //creates card element for each sku in the json object
  const items = skus.map(sku => <Card product={products[sku]} images={images}/>);
  return (
      <div>{items}</div>
    );
} 

export default ProductTable;