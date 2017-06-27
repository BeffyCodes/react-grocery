import React from 'react';
import List from './List';

/**
 * The container for the whole app
 */
class Container extends React.Component {
  constructor() {
    super();
    
    this.addItemHandler = this.addItemHandler.bind(this);
    this.shouldSubmit = this.shouldSubmit.bind(this);
  }
  addItemHandler() {
    if (this.itemNameInput.value && this.itemNameInput.value.trim()) {
      this.list.addItem(this.itemNameInput.value.trim());
    }

    this.itemNameInput.value = "";
  }

  shouldSubmit(e) {
    if (e.charCode === 13) {
      this.addButton.click();
    }
  }

  render() {
    return (
      <div id="container">
        Item Name: <input ref={(inputEl) => { this.itemNameInput = inputEl }} type="text" onKeyPress={this.shouldSubmit} />
        <button ref={(addButton) => this.addButton = addButton} onClick={this.addItemHandler}>Add Item</button>
        <List ref={(listObj) => { this.list = listObj }} />
      </div>
    );
  }
}
export default Container;