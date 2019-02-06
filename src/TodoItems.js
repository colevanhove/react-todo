import React, { Component } from 'react';

class TodoItems extends Component {

    constructor (props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        return <li key={item.key}><button onClick={() => this.delete(item.key)}><i className="fa fa-times"></i></button>{item.text}</li>
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="todo-list">
                {listItems}
            </ul>
        );
    }
};

export default TodoItems