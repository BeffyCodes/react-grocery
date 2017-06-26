import React from 'react';
import List from './List';

/**
 * The container for the whole app
 */
class Container extends React.Component {
  addItemHandler() {
    if (this.itemNameInput.value && this.itemNameInput.value.trim()) {
      this.list.addItem(this.itemNameInput.value);
    }

    this.itemNameInput.value = "";
  }

  render() {
    return (
      <div id="container">
        Item Name: <input ref={(inputEl) => { this.itemNameInput = inputEl }} type="text" />
        <button onClick={(e) => this.addItemHandler()}>Add Item</button>
        <List ref={(listObj) => { this.list = listObj }} />
      </div>
    );
  }
}
export default Container;