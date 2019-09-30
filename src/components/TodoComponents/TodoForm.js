import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="newTodo"
          placeholder="Add new todo"
          value={this.state.newTodo}
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
        <button onClick={this.props.clear}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
