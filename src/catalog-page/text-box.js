import React, { Component } from "react";

class TextBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <strong>Title: </strong>{this.props.children}
      </div>
    )
  }
}

export default TextBox;
