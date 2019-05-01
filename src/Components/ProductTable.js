import React, { Component } from "react";
import ShirtCard from './ShirtCard.js'

const ProductTable = (props) => {
  console.log(props.products)
  const skus = Object.keys(props.products);
  //creates card element for each sku in the json object
  const items = skus.map(sku => <ShirtCard product={props.products[sku]} addToCart={props.addToCart}/>);
  return (
      <div style={{marginLeft: "25%", width: "75%", marginTop: "35px"}}>
      <div>16 product(s) found.</div>
      {items}
      </div>
    );
} 

export default ProductTable;