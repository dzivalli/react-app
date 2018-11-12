import React from 'react';
import ReactDOM from 'react-dom';

import CatalogPage from './catalog-page';
import { Products } from './constants/products';

class App extends React.Component {
  render() {
    return (
      <CatalogPage products={Products}></CatalogPage>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
