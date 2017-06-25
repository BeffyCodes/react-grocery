import React from 'react';
 
/**
 * A button that sets off an action
 */
class ActionButton extends React.Component {
  handleClick () {
    this.props.buttonClickedHandler(this.props.buttonType);
  }

  render() {
    return (
      <button onClick={ this.handleClick() }>
        {this.props.buttonType}
      </button>
    );
  }
}

ActionButton.propTypes = {
  buttonType: React.PropTypes.string,
  buttonClickedHandler: React.PropTypes.func
}

export default ActionButton;
