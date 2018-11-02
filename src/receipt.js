export default class Receipt {
  constructor() {
    this._items = [];
  }

  addItem(name, amount) {
    this._items.push({
      name: name,
      amount: amount
    });
  }

  deleteItem(name) {
    let elementIndex = this._items.findIndex((item) => item.name === name);
    if (elementIndex) {
      this._items.splice(elementIndex, 1);
    }
  }

  getItems() {
    return this._items;
  }

  getTotal() {
    return this._items.reduce(
      (acc, item) => acc + item.amount,
      0
    );
  }
}
