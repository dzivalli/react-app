import React, { Component } from "react";

import Catalog from "./catalog";
import CartContext from "./cart-context";
import CartButton from "./cart-button";

class CatalogPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productIds: []
    };

    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(productId) {
    let productIds = this.state.productIds.slice(0);
    productIds.push(productId);

    this.setState({ productIds });
  }

  render() {
    return (
      <CartContext.Provider value={{
        productIds: this.state.productIds,
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
