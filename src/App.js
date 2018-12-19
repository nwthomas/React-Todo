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
      inputText: ""
    };
  }

  addCharacter = event => {
    console.log("Working!!!" + event);
  };

  // you will need a place to store your state in this component.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="app">
        <TodoList tasks={this.state.listItems} />
        <TodoForm inputText={this.state.inputText} />
      </div>
    );
  }
}

export default App;
