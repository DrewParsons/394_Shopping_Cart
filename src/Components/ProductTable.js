import React, { Component } from "react";
import ShirtCard from './ShirtCard.js'

const ProductTable = (props) => {
  console.log(props.products)
  const skus = Object.keys(props.products);
  const inventorySkus = Object.keys(props.inventory)

  const checkSizeSelection = () => {
    if(props.small) {
      return "S"
      console.log('triggered')
    }
    else if(props.medium) {
      return "M"
    }
    else if(props.large) {
      return "L"
    }
    else if(props.xlarge) {
      return "XL"
    }
    else {return "none"}
  }
  const size = checkSizeSelection()
  console.log(size)
  //creates card element for each sku in the json object
  let items;

  //Riesbeck this is the hottest one-liner I've ever written pls notice me
  size !== "none" ? items = skus.map(sku => props.inventory[sku][size] > 0 ? <ShirtCard product={props.products[sku]} addToCart={props.addToCart}/> : null) : items = skus.map(sku => <ShirtCard product={props.products[sku]} addToCart={props.addToCart}/>)
  // const items = skus.map(sku => <ShirtCard product={props.products[sku]} addToCart={props.addToCart}/>);
  return (
      <div style={{marginLeft: "25%", width: "75%", marginTop: "35px"}}>
      <div>16 product(s) found.</div>
      {items}
      </div>
    );
} 

export default ProductTable;