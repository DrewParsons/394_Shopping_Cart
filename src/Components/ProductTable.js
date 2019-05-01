import React, { Component } from "react";
import ShirtCard from './ShirtCard.js'

const ProductTable = ({products}) => {
  const skus = Object.keys(products);
  //creates card element for each sku in the json object
  const items = skus.map(sku => <ShirtCard product={products[sku]}/>);
  return (
      <div style={{marginLeft: "25%", width: "75%", marginTop: "35px"}}>
      <div>16 product(s) found.</div>
      {items}
      </div>
    );
} 

export default ProductTable;