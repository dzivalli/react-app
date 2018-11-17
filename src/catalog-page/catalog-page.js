import React, { Component } from "react";

import Catalog from "./catalog";

class CatalogPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row my-3">
          <div className="col">
            <button className="btn btn-primary float-right">Checkout</button>
          </div>
        </div>
        <Catalog products={this.props.products}></Catalog>
      </div>
    )
  }
}

export default CatalogPage;
