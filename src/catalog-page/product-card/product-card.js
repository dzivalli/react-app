import React, { Component } from "react";

import Price from "./price";
import TextBox from "./text-box";
import Image from "./image";
import BuyBlock from "./buy-block"

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0
    };

    this.changeAmount = this.changeAmount.bind(this);
    this.onProductCardDragStart = this.onProductCardDragStart.bind(this);
  }

  changeAmount(amount) {
    this.setState({ amount })
  }

  onProductCardDragStart(e) {
    const product =
      {
        id: this.props.product.id,
        amount: this.state.amount
      };
    e.dataTransfer.setData("text",  JSON.stringify(product));
  }

  render() {
    const product = this.props.product;
    let { amount } = this.state;

    return (
      <div className="m-3 border float-left p-3"
           onDragStart={this.onProductCardDragStart}
           draggable>
        <Image src={product.imageUrl}
               alt={product.title}
               width={100}
               height={60} />
        <TextBox>{product.title}</TextBox>
        <Price price={product.price} />
        <BuyBlock changeAmount={this.changeAmount}
                  product={{
                     id: product.id,
                     amount: amount
                   }} />
      </div>
    )
  }
}

export default ProductCard;
