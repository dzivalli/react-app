import React, { Component } from 'react';

import Price from './price';
import TextBox from './text-box';
import Image from './image';

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const product = this.props.product;
    return (
      <div>
        <Image src={product.imageUrl}
               alt={product.title}
               width={100}
               height={50}>
        </Image>
        <TextBox>{product.title}</TextBox>
        <Price price={product.price}></Price>
      </div>
    )
  }
}

export default ProductCard;
