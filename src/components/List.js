import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

/**
 * The list containing the grocery Items
 */
class List extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      todoCounter: 0
    };

    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(id) {
    const items = this.state.items.slice();

    let filteredArray = items.filter(function (item, index) {
      return id != item.id;
    });

    this.setState({
      items: filteredArray
    });
  }

  addItem(newItemName, newItemNum) {
    let counter = this.state.todoCounter;
    const items = this.state.items.concat({
      id: counter++,
      name: newItemName,
      num: 1,
      completed: false
    });

    this.setState({
      items: items,
      todoCounter: counter
    });
  }

  render() {
    let idCounter = 0;
    const items = this.state.items;
    const listItems = items.map((item) =>
      <Item key={item.id}
        id={item.id}
        name={item.name}
        num={item.num}
        removeHandler={this.removeItem}
        completed={item.completed}
      />
    )
    return (
      <ul id="grocery-list">
        {listItems}
      </ul>
    );
  }
}
export default List;