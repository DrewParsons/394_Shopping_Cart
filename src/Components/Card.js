import React, { Component } from "react";
import '../Styles/Card.css'


const Card = ({product, images}) => {
  console.log(product)
  const title = product.title
  return (
    <div className="card">{title}</div>
  )
}

export default Card;