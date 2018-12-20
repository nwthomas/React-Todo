import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import store from "store";
import "./App.css";

let toDo = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
    textDecoration: "line-through"
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
    textDecoration: "none"
  },
  {
    task: "Eat Gingerbread",
    id: 1528818473621,
    completed: false,
    textDecoration: "none"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: toDo,
      inputText: "",
      inputTextTwo: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTask = event => {
    // How to "mutate" data in React with .setState()
    // 1 - Prevent default behavior with event.preventDefault()
    // 2 - Get all the old data in the old array (use spread operator) and a comma between it and #2
    // 3 - Get the new data from this.state.inputText above (or whatever you called it) and create new object
    // 4 - Change inputText back to empty string ""

    const newTask = {
      task: this.state.inputText,
      id: Date.now(),
      completed: false,
      textDecoration: "none"
    };
    event.preventDefault();
    this.setState({
      listItems: [...this.state.listItems, newTask],
      inputText: ""
    });

    store.set(toDo); // Working on persistence here
  };

  render() {
    return (
      <div className="app__container">
        <TodoList tasks={this.state.listItems} />
        <TodoForm
          addTask={this.addTask}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
