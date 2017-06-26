import React from 'react';
import ActionButton from './ActionButton'
import ButtonTypes from "../logic/buttonTypes"

/**
 * The line item for a grocery item
 */
class Item extends React.Component {
    constructor() {
        super();
        this.state = {
            completed: false
        }
    }
    // TODO: move this up to the List level. There's no reason for the Item to do the routing on which button was pushed.
    // It should just check what was clicked, if it was a button, bubble it up, if it was itself, it's selected
    handleClick(buttonType) {
        if (buttonType === ButtonTypes.DELETE) {
            // call parent's remove handler
            this.props.removeHandler(this.props.id);
        } else if (buttonType === ButtonTypes.COMPLETED) {
            // set this.completed to true, add completed class
            this.setState({
                completed: true
            });
        } else {
            // no button was pushed, item was selected
            console.log("lol");
        }
    }

    render() {
        let className = "list-item";

        if (this.state.completed) {
            className += " completed";
        }

        return (
            <li className={className}>
                {this.props.name}
                <ActionButton className={"complete-button"}
                    buttonType={ButtonTypes.COMPLETED}
                    buttonClickedHandler={(buttonType) => this.handleClick(buttonType)}
                />
                <ActionButton className={"delete-button"}
                    buttonType={ButtonTypes.DELETE}
                    buttonClickedHandler={(buttonType) => this.handleClick(buttonType)}
                />
            </li>
        );
    }
}

Item.propTypes = {
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    num: React.PropTypes.number,
    removeHandler: React.PropTypes.func
}

export default Item;
