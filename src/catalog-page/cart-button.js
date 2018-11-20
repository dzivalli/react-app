import React from "react";

import CartContext from "./cart-context"

class CartButton extends React.Component {
  constructor(props) {
    super(props);
  }

  onDragOver(e) {
    e.preventDefault();
  }

  onProductDrop(e, addProductCallback) {
    e.preventDefault();

    let product = JSON.parse(e.dataTransfer.getData("text"));
    addProductCallback(product);
  }

  render() {
    return (
      <CartContext.Consumer>
        {
          ({ productsInCart, addProduct }) => {
            return (
              <button className="btn btn-primary float-right"
                      onDrop={(e) => this.onProductDrop(e, addProduct) }
                      onDragOver={this.onDragOver}>
                Checkout ({productsInCart.length})
              </button>
            )
          }
        }
      </CartContext.Consumer>
    );
  }
}

export default CartButton;
