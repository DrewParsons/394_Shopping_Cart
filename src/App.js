import React, { Component, useState } from "react";
import ProductTable from './Components/ProductTable'
import SizeBar from './Components/SizeBar.js'
import ShoppingCart from './Components/ShoppingCart'
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: props.products,
      cart: false,
      small: false,
      medium: false,
      large: false,
      xlarge: false,
      cartItems: [],
    };

    this.handleSmall = this.handleSmall.bind(this)
    this.handleMedium = this.handleMedium.bind(this)
    this.handleLarge = this.handleLarge.bind(this)
    this.handleLarge = this.handleLarge.bind(this)
    this.toggleCart = this.toggleCart.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.delete = this.delete.bind(this);
  }

  addToCart(product) {
    let newCart = this.state.cartItems
    newCart.push(product)
    console.log(this.state.cartItems)
    this.setState({
      cartItems: newCart
    })
    if(!this.state.cart) {
      this.toggleCart()
    }
  }

  delete(product) {
    console.log(this.state.cartItems)
    let newCart = this.state.cartItems
    newCart.splice(newCart.indexOf(product), 1 );
    console.log(this.state.cartItems)
    this.setState({
      cartItems: newCart
    })
  }

  toggleCart() {
    this.setState({cart: !this.state.cart})
    // console.log(this.state.cartItems)
  }

  handleSmall() {
    console.log("please")
    this.setState( {
      small: !this.state.small
    })
  }

  handleMedium() {
    this.setState( {
      medium: !this.state.medium
    })
  }

  handleLarge() {
    this.setState( {
      large: !this.state.large
    })
  }

  handleXlarge() {
    this.setState( {
      xlarge: !this.state.xlarge
    })
  }


  render() {
  return (
    <div>
      <SizeBar small={this.handleSmall} medium={this.handleMedium} large={this.handleLarge} xlarge={this.handleXlarge} />
      <ProductTable products={this.state.products} addToCart={this.addToCart}/>
      <ShoppingCart toggleCart={this.toggleCart} cart={this.state.cart} cartItems={this.state.cartItems} delete={this.delete}/>
      <Button aria-label="Delete" variant="outlined" style={{position: "fixed", top:10, right: 10}} onClick={this.toggleCart}>
        <ShoppingCartIcon fontSize="small"/>
      </Button>
    </div>
    );
  }
};

export default App;