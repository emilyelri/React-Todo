import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <Todo key={todo.id} todo={todo} complete={this.props.complete} />
        ))}
      </div>
    );
  }
}

export default TodoList;
