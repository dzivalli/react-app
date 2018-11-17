import React, { Component } from "react";

class Price extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <strong>Price: </strong>{this.props.price} RUB
      </div>
    )
  }
}

export default Price;
