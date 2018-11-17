import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CatalogPage from "./catalog-page/catalog-page";
import { Products } from "./constants/products";

class App extends React.Component {
  render() {
    return (
      <CatalogPage products={Products}></CatalogPage>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
