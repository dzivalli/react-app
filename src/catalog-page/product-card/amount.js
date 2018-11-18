import React from "react";

class Amount extends React.Component {
  constructor(props) {
    super(props);

    this.onAmountChange = this.onAmountChange.bind(this);
  }

  onAmountChange(e) {
    const amount = parseInt(e.target.value);

    this.props.changeAmount(amount);
  }

  render() {
    return (
      <div className="my-2">
        <label>
          <strong>Amount: </strong>
          <input type="number"
                 onChange={this.onAmountChange} />
        </label>
      </div>
    )
  }
}

export default Amount;
