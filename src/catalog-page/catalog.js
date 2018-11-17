import React, { Component } from "react";

import ProductCard from "./product-card/product-card";

class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          this.props.products.map((product) => (
            <ProductCard product={product} ></ProductCard>
          ))
        }
      </div>
    )
  }
}

export default Catalog;
