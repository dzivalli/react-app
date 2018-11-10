import React, { Component } from 'react';

import Catalog from './catalog';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Catalog products={this.props.products}></Catalog>
      </div>
    )
  }
}

export default CatalogPage;
