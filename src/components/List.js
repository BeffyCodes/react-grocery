import React from 'react';
import Item from './Item'

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
        removeHandler={(id) => this.removeItem(id)}
        completed={item.completed}
      />
    )
    return (
      <ul id="groceryList">
        {listItems}
      </ul>
    );
  }
}
export default List;