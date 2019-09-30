import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false,
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false,
        }
      ]
    };
  }

  handleClear = () => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    });
  };

  handleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    });
  };

  addTodo = todo => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: todo,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  render() {
    return (
      <div className="app">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} clear={this.handleClear}/>
        <TodoList todos={this.state.todos} complete={this.handleComplete} />
      </div>
    );
  }
}

export default App;
