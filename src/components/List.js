import React from 'react';
import Item from './Item'

/**
 * The list containing the grocery Items
 */
class List extends React.Component {
  constructor() {
    super();
    this.state = {
      //items: []
      items: [
        {
          name: "Item 1",
          num: 4
        },
        {
          name: "Item 2",
          num: 1
        },
        {
          name: "Item 3",
          num: 3
        },
        {
          name: "Item 4",
          num: 2
        }
      ],
    };
  }

  removeItem(id) {

  }

  addItem(newItemName, newItemNum) {
    const items = this.state.items.concat({
      name: newItemName,
      num: newItemNum
    });

    this.setState({
      items: items
    });
  }

  render() {
    let idCounter = 0;
    const items = this.state.items;
    const listItems = items.map((item) =>
      <Item key={idCounter++}
        name={item.name}
        num={item.num}
        removeHandler={this.removeItem}
      />
    )
    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}
export default List;