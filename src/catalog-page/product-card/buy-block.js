import React from "react";
import CartContext from "../cart-context"

class BuyBlock extends React.Component {
  constructor(props) {
    super(props);

    this.onAmountChange = this.onAmountChange.bind(this);
  }

  onAmountChange(e) {
    const amount = parseInt(e.target.value);

    this.props.changeAmount(amount);
  }

  render() {
    const { product } = this.props;

    return (
      <CartContext.Consumer>
        {
          ({ addProduct }) => (
            <div className="mt-2">
              <input type="number"
                     onChange={this.onAmountChange} />
              <button className="btn btn-info float-right ml-1"
                      onClick={() => addProduct(product)}
                      disabled={!product.amount}>
                Buy
              </button>
            </div>
          )
        }
      </CartContext.Consumer>

    )
  }
}

export default  BuyBlock;
