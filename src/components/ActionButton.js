import React from 'react';
import MdDone from 'react-icons/lib/md/done';
import MdDelete from 'react-icons/lib/md/delete';
import MdModeEdit from 'react-icons/lib/md/mode-edit';
import FaCheckCircle from 'react-icons/lib/fa/check-circle';
import ButtonTypes from "../utils/buttonTypes";

/**
 * A button that sets off an action
 */
class ActionButton extends React.Component {
  handleClick(event) {
    event.stopPropagation();
    this.props.buttonClickedHandler(this.props.buttonType)
  }

  render() {
    // Determine icon by button type
    let icon = null;

    switch (this.props.buttonType) {
      case ButtonTypes.COMPLETED:
        icon = <MdDone />;
        break;
      case ButtonTypes.DELETE:
        icon = <MdDelete />;
        break;
      case ButtonTypes.EDIT:
        icon = <MdModeEdit />;
        break;
      case ButtonTypes.SAVE:
        icon = <FaCheckCircle />;
        break;
    }

    return (
      <button className={this.props.className}
        onClick={(event) => this.handleClick(event)}>
        {icon}
      </button>
    );
  }
}

ActionButton.propTypes = {
  buttonType: React.PropTypes.number,
  buttonClickedHandler: React.PropTypes.func
}

export default ActionButton;
