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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.name);
  };

  addCharacter = event => {
    event.preventDefautl();
    this.setState({
      listItems: [
        ...this.state.listItems,
        { task: this.state.inputText, id: Date.now(), completed: false }
      ],
      inputText: ""
    });
  };

  render() {
    return (
      <div className="app">
        <TodoList tasks={this.state.listItems} />
        <TodoForm
          inputText={this.state.inputText}
          handleChange={this.addCharacter}
        />
      </div>
    );
  }
}

export default App;
