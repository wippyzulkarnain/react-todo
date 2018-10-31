import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import TodoListDetail from "./TodoListDetail"
// import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          todo: "Learn React",
          status: false
        },
        {
          todo: "Learn Java",
          status: false
        }
      ],
      input_todo:"",
      filtered_todo:[],
      input_search:""
    }
    
  }
  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  deleteTodo = index => {
    let oldTodo = this.state.todos.slice();
    oldTodo.splice(index,1);
    
    this.setState({
      todos : oldTodo
    })
  }
  Search = async e =>{ 
    await this.handleOnChange(e);
    let prevTodo = this.state.todos.slice();
    prevTodo = prevTodo.filter( todos =>
      todos.todo.includes(this.state.input_search))
      await this.setState({
        filtered_todo: prevTodo
      })
  }
  addTodo = () => {
    let newTodos = this.state.todos.concat({todo: this.state.input_todo , status : false});
    

    this.setState({
      todos: newTodos
    });

  
  };
  render() {
    return (
      <div className="App">
        <Header />
        <input
          type="text"
          name="input_todo"
          value={this.state.input_todo}
          onChange={this.handleOnChange}
        />
        <button onClick={() => this.addTodo()}>Add</button>
        <br />
        <br />
        <input
          type="text"
          name="input_search"
          value={this.state.input_search}
          onChange={this.handleOnChange}
        />
        <button onClick={() => this.Search()}>Search</button>
        
        {this.state.input_search === "" &&
        this.state.todos.map((todos, index) => (
          <TodoListDetail
            name={todos.todo}
            key={index}
            index={index}
            deleteTodo={this.deleteTodo}
          />))}

          {this.state.input_search !== "" &&
        this.state.filtered_todo.map((todos, index) => (
          <TodoListDetail
            name={todos.todo}
            key={index}
            index={index}
            deleteTodo={this.deleteTodo}
          />))}
      </div>
    );
  }
}

export default App;
