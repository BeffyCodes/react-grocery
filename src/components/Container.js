import React from 'react';
import List from './List'
 
/**
 * The container for the whole app
 */
class Container extends React.Component {
  addItemHandler () {
    this.listObj.addItem(this.itemNameInput.value);
  }
  render() {
    return (
      <div>
        Item Name: <input ref={(inputEl) => this.itemNameInput = inputEl} type="text" /> <button onClick={this.addItemHandler}>Add Item</button>
        <List ref={(listObj) => this.list = listObj}/>
      </div>
    );
  }
}
export default Container;