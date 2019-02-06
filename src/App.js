import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <div className="main-content">
          <TodoList addItem={this.addItem}
                    inputElement={this.inputElement} />
        </div>
      </div>
    );
  }
}

export default App;
