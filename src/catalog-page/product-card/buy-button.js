import React from "react";
import CartContext from "../cart-context"

class BuyButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { productId } = this.props;

    return (
      <CartContext.Consumer>
        {
          ({ addProduct }) => (
            <button className="btn btn-info float-right mt-2"
                    onClick={() => addProduct(productId)}>
              Buy
            </button>
          )
        }
      </CartContext.Consumer>

    )
  }
}

export default  BuyButton;
