import React, { Component } from 'react';
import ProductList from '../Components/ProductList';
import Navbar from '../Components/Navbar';

class MainContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <ProductList />
      </div>
    );
  }
}

export default MainContainer;
