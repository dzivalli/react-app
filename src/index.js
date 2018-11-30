import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import routes from "./routes"
import Menu from "Src/components/Menu"
import CartContainer from "Src/components/CartContainer"

const App = () => (
  <CartContainer>
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
  </CartContainer>
);

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
