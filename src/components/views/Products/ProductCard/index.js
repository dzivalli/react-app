import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import Price from "./price";
import TextBox from "./text-box";
import Image from "./image";
import BuyBlock from "./buy-block"
import { productPath} from "Src/helpers/routes";

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.onProductCardDragStart = this.onProductCardDragStart.bind(this);
  }

  onProductCardDragStart(e) {
    const { id } = this.props.product;
    e.dataTransfer.setData("text",  JSON.stringify(id));
  }

  render() {
    const product = this.props.product;

    return (
      <div className="m-3 border float-left p-3"
           onDragStart={this.onProductCardDragStart}
           draggable>
        <NavLink to={productPath(product.id)}>
          <Image src={product.imageUrl}
                 alt={product.title}
                 width={100}
                 height={60} />
          <TextBox>{product.title}</TextBox>
          <Price price={product.price} />
        </NavLink>
        <BuyBlock productId={product.id} />
      </div>
    )
  }
}

export default ProductCard;
