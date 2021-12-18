import axios from "axios";
import React, { Component } from "react";

export default class App extends Component {
  state = { todos: [] };

  async componentDidMount() {
    let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    this.setState({ todos: res.data });
  }

  render() {
    return (
      <div className='container'>
        {this.state.todos.length > 0 ? (
          <div>
            <ul className='list-group'>
              {this.state.todos.map((todo) => (
                <li className='list-group-item d-flex justify-content-between align-items-center'>
                  {todo.title}
                  <span>
                    <input type='checkbox' checked={todo.completed} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <span>Loading...</span>
          </div>
        )}
      </div>
    );
  }
}
