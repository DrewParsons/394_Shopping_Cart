import React, { Component } from "react";
import ProductTable from './Components/ProductTable'
import SizeBar from './Components/SizeBar.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: props.products,
      small: false,
      medium: false,
      large: false,
      xlarge: false
    };
  }

  handleSmall() {
    this.props.small = !this.props.small
  }

  handleMedium() {
    this.props.medium = !this.props.medium
  }

  handleLarge() {
    this.props.large = !this.props.large
  }

  handleXlarge() {
    this.props.xlarge = !this.props.xlarge
  }

  render() {
  return (
    <div>
      <SizeBar small={this.state.small} medium={this.state.medium} large={this.state.large} xlarge={this.state.xlarge} />
      <ProductTable products={this.state.products}/>
    </div>
    );
  }
};

export default App;