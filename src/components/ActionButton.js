import React from 'react';
import MdDone from 'react-icons/lib/md/done';
import MdDelete from 'react-icons/lib/md/delete';
import ButtonTypes from "../logic/buttonTypes";

/**
 * A button that sets off an action
 */
class ActionButton extends React.Component {
  handleClick() {
    this.props.buttonClickedHandler(this.props.buttonType)
  }

  render() {
    return (
      <button className={this.props.className}
        onClick={() => this.handleClick()}>
        {this.props.buttonType === ButtonTypes.COMPLETED ? <MdDone /> : <MdDelete />}
      </button>
    );
  }
}

ActionButton.propTypes = {
  buttonType: React.PropTypes.number,
  buttonClickedHandler: React.PropTypes.func
}

export default ActionButton;
