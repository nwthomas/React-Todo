import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

let toDo = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  },
  {
    task: "Eat Gingerbread",
    id: 1528818473621,
    completed: false
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
    console.log(event.target.name);
  };

  addTask = event => {
    // How to "mutate" data in React with .setState()
    // 1 - Get all the old data in the old array (use spread operator) and a comma between it and #2
    // 2 - Get the new data from this.state.inputText above (or whatever you called it)
    // 3 - Prevent default behavior with event.preventDefault()

    event.preventDefault();
    this.setState({
      listItems: [
        ...this.state.listItems,
        { task: this.state.inputText, id: 4, completed: false }
      ],
      inputText: ""
    });
  };

  render() {
    return (
      <div className="app">
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
