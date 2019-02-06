import React, { Component } from 'react';
import TodoItems from './TodoItems';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        e.preventDefault();
        if (this.inputElement.value !== '') {
            var newItem = {
                text: this.inputElement.value,
                key: Date.now()
            }
            console.log(newItem);
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                }
            });

        }
        this.inputElement.value = '';
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });
        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className="todo-container">
                <form onSubmit={this.addItem}>
                    <input placeholder="Task"
                           ref={(a) => this.inputElement = a} />
                    <button type="submit">Add</button>
                </form>

            <TodoItems entries={this.state.items}
                       delete={this.deleteItem}/>

            </div>
        )
    }
}

export default TodoList