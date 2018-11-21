import React, { Component } from "react";

import Catalog from "./catalog";
import CartContext from "./cart-context";
import CartButton from "./cart-button";

class CatalogPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productsInCart: []
    };

    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(id, amount = 1) {
    const productsInCart = this.state.productsInCart.slice(0);

    productsInCart.push({ id, amount });
    this.setState({ productsInCart });
  }

  render() {
    return (
      <CartContext.Provider value={{
        productsInCart: this.state.productsInCart,
        addProduct: this.addProduct
      }}>
        <div className="container">
          <div className="row my-3">
            <div className="col">
              <CartButton />
            </div>
          </div>
          <Catalog products={this.props.products}></Catalog>
        </div>
      </CartContext.Provider>
    )
  }
}

export default CatalogPage;
