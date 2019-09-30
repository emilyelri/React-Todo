import React from "react";

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="newTodo"
          placeholder="...todo"
          value={this.state.newTodo}
          onChange={this.handleChange}
        />
        <button type="submit">Add Todo</button>
        <button onClick={this.props.clear}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;