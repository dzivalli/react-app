import React, { Component } from "react";

import Price from "./price";
import TextBox from "./text-box";
import Image from "./image";
import BuyButton from "./buy-button"

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const product = this.props.product;
    return (
      <div className="m-3 border float-left p-3">
        <Image src={product.imageUrl}
               alt={product.title}
               width={100}
               height={60}>
        </Image>
        <TextBox>{product.title}</TextBox>
        <Price price={product.price}></Price>
        <BuyButton productId={product.id}/>
      </div>
    )
  }
}

export default ProductCard;
