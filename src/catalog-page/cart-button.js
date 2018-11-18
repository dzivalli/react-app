import React from "react";

import CartContext from "./cart-context"

class CartButton extends React.Component {
  constructor(props) {
    super(props);
  }

  onDragOver(e) {
    e.preventDefault();
  }

  render() {
    return (
      <CartContext.Consumer>
        {
          ({ productsInCart, addProduct }) => {
            return (
              <button className="btn btn-primary float-right"
                      onDrop={(e) => {
                        e.preventDefault();

                        let product = JSON.parse(e.dataTransfer.getData("text"));
                        addProduct(product);
                      }}
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
