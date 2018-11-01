import React from 'react';
import ReactDOM from 'react-dom';
import Receipt from './receipt';

class HelloWorld extends React.Component {
  render() {
    let receipt = new Receipt();
    receipt.addItem('potato', 10);
    receipt.addItem('tomato', 20);

    return (
      <div>
        <ul>
          {
            receipt.getItems().map((item) => (
              <li>
                <strong>Name:</strong>  {item.name}, <strong>Amount:</strong> {item.amount}
              </li>
            ))
          }
        </ul>
        <div>Total: {receipt.getTotal()}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
);
