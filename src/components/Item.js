import React from 'react';
import ActionButton from './ActionButton'
 
/**
 * The line item for a grocery item
 */
class Item extends React.Component {

  handleClick(buttonType) {
      if (buttonType === "delete") {
          // call parent's remove handler
      } else if (buttonType === "completed") {
          // set this.completed to true, add completed class
      } else {
          // no button was pushed, item was selected
      }
  }
 
  render() {
      let className = "list-item";

      if (this.props.completed) {
          className += " completed";
      }
    return (
      <li onClick={() => { this.handleClick()}}
          className={className}>
        {this.props.name}, {this.props.num}
      </li>
    );
  }
}

Item.propTypes = {
    removeHandler: React.PropTypes.func,
    name: React.PropTypes.string,
    num: React.PropTypes.number,
    completed: React.PropTypes.bool
}

export default Item;
