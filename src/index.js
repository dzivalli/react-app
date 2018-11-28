import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import routes from "./routes"
import Menu from "Src/components/Menu"
import CartContext from "Src/contexts/cart-context";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productsInCart: []
    };

    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(id, amount = 1) {
    const productsInCart = this.state.productsInCart.slice(0);

    productsInCart.push({ id, amount });
    this.setState({ productsInCart });
  }

  render() {
    return (
      <CartContext.Provider value={{
        productsInCart: this.state.productsInCart,
        addProduct: this.addProduct
      }}>
        <Router>
          <div className="container">
            <Menu />
            <Switch>
              {
                routes.map((route, index) => (
                  <Route {...route} key={index} />
                ))
              }
            </Switch>
          </div>
        </Router>
      </CartContext.Provider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
