import React, { Component } from "react";

import Price from "./price";
import TextBox from "./text-box";
import Image from "./image";
import BuyButton from "./buy-button"
import Amount from "./amount"

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0
    };

    this.changeAmount = this.changeAmount.bind(this);
  }

  changeAmount(amount) {
    this.setState({ amount })
  }

  render() {
    const product = this.props.product;
    let { amount } = this.state;

    return (
      <div className="m-3 border float-left p-3">
        <Image src={product.imageUrl}
               alt={product.title}
               width={100}
               height={60} />
        <TextBox>{product.title}</TextBox>
        <Price price={product.price} />
        <Amount changeAmount={this.changeAmount}/>
        <BuyButton productId={product.id}
                   amount={amount} />
      </div>
    )
  }
}

export default ProductCard;
