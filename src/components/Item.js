import React from 'react';
import ActionButton from './ActionButton'
import ButtonTypes from "../utils/buttonTypes"

/**
 * The line item for a grocery item
 */
class Item extends React.Component {
    constructor() {
        super();
        this.state = {
            completed: false,
            inEditState: false
        }
    }

    propogateDelete() {
        // call list's remove handler
        this.props.removeHandler(this.props.id);
    }

    completeItem() {
        // set this.completed to true, add completed class
        this.setState({
            completed: true
        });
    }

    editItem() {
        console.log("edit");
    }

    saveItem() {
        console.log("save");
    }

    selectItem() {
        console.log("item selected");
    }

    render() {
        let className = "list-item";
        const inEditState = this.state.inEditState;

        if (this.state.completed) {
            className += " completed";
        }

        if (inEditState) {
            className = + " edit-state";
        }

        return (
            <li className={className} onClick={() => this.selectItem()}>
                {this.props.name}
                <ActionButton className={"edit-button"}
                    buttonType={ButtonTypes.EDIT}
                    buttonClickedHandler={() => this.editItem()}
                />
                <ActionButton className={"save-button"}
                    buttonType={ButtonTypes.SAVE}
                    buttonClickedHandler={() => this.saveItem()}
                />
                <ActionButton className={"complete-button"}
                    buttonType={ButtonTypes.COMPLETED}
                    buttonClickedHandler={() => this.completeItem()}
                />
                <ActionButton className={"delete-button"}
                    buttonType={ButtonTypes.DELETE}
                    buttonClickedHandler={() => this.propogateDelete()}
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
