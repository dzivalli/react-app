import React, { Component } from 'react';

class Price extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        {this.props.price} RUB
      </span>
    )
  }
}

export default Price;
