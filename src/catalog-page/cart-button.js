import React from "react";

import CartContext from "./cart-context"

class CartButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CartContext.Consumer>
        {
          ({ productIds }) => {
            return (<button className="btn btn-primary float-right">Checkout ({productIds.length})</button>)
          }
        }
      </CartContext.Consumer>
    );
  }
}

export default CartButton;
