import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import NavbarContainer from "./components/NavbarComponents/NavbarContainer";
import store from "store";
import "./App.css";

let toDo = [
  {
    task: "Get Tooth Pulled",
    id: 1528817077286,
    completed: false,
    textDecoration: "none"
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
  },
  {
    task: "Drink Hot Chocolate",
    id: 1528818498456,
    completed: false,
    textDecoration: "none"
  },
  {
    task: "Eat Candy Canes",
    id: 1528819873625,
    completed: false,
    textDecoration: "none"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: toDo,
      inputText: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  makeLineThrough = id => {
    // 1 - Look through characters
    // 2 - Look at each character id to see if it's the one we clicked on
    // 3 - If we are looking at the character we clicked on, we will change the character textDecoration to "line-through"
    // 4 - Else we will return the character object unchanged
    this.setState({
      listItems: this.state.listItems.map(task => {
        if (task.id === id) {
          return {
            ...task,
            textDecoration:
              task.textDecoration === "none" ? "line-through" : "none"
          };
        } else {
          return task;
        }
      })
    });
  };

  addTask = event => {
    // 1 - Prevent default behavior with event.preventDefault()
    // 2 - Get the new data from this.state.inputText above (or whatever you called it)
    // 3 - Prevent default behavior with event.preventDefault()
    // 4 - Change inputText back to empty string ""
    const newTask = {
      task: this.state.inputText,
      id: Date.now(),
      completed: false,
      textDecoration: "none"
    };
    event.preventDefault();
    if (newTask.task === "") return;
    this.setState(
      {
        listItems: [...this.state.listItems, newTask],
        inputText: ""
      },
      () => console.log(this.state) // Using annonymous arrow function to run console.log after .setState() has run
    );

    store.set(this.state.listItems);
  };

  deleteTask = event => {
    event.preventDefault();
    this.setState({
      listItems: this.state.listItems.filter(
        task => task.textDecoration === "none"
      )
    });
  };

  render() {
    return (
      <div className="app__container">
        <NavbarContainer />
        <div className="app">
          <TodoList
            tasks={this.state.listItems}
            makeLineThrough={this.makeLineThrough}
          />
          <TodoForm
            addTask={this.addTask}
            inputText={this.state.inputText}
            handleChange={this.handleChange}
            deleteTask={this.deleteTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
