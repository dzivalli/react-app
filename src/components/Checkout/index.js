import React from "react";
import { NavLink } from "react-router-dom";

import CartContext from "Src/contexts/cart-context"
import { cartPath } from "Src/helpers/routes";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  onDragOver(e) {
    e.preventDefault();
  }

  onProductDrop(e, addProductCallback) {
    e.preventDefault();

    const id = JSON.parse(e.dataTransfer.getData("text"));
    addProductCallback(id);
  }

  render() {
    return (
      <CartContext.Consumer>
        {
          ({ productsInCart, addProduct }) => (
            <NavLink className="nav-link btn btn-success"
                     onDrop={(e) => this.onProductDrop(e, addProduct) }
                     onDragOver={this.onDragOver}
                     to={cartPath()}>
              Checkout ({productsInCart.length})
            </NavLink>
          )
        }
      </CartContext.Consumer>
    );
  }
}

export default Checkout;
