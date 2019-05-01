import React, { Component, useState } from "react";
import ProductTable from './Components/ProductTable'
import SizeBar from './Components/SizeBar.js'
import ShoppingCart from './Components/ShoppingCart'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: props.products,
      cart: false,
      small: false,
      medium: false,
      large: false,
      xlarge: false
    };

    this.handleSmall = this.handleSmall.bind(this)
    this.handleMedium = this.handleMedium.bind(this)
    this.handleLarge = this.handleLarge.bind(this)
    this.handleLarge = this.handleLarge.bind(this);
  }



  toggleCart() {
    this.setState({cart: !this.state.cart})
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
      <ProductTable products={this.state.products}/>
      <ShoppingCart toggleCart={this.toggleCart} cart={this.state.cart}/>
    </div>
    );
  }
};

export default App;