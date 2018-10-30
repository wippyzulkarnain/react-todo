import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

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
      input_todo:""
    };
    handleOnChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <InputGroup>
        <Input name="input_todo"
          value={this.state.input_todo}
          onChange={this.handleOnChange} />
        <InputGroupAddon addonType="append">
          <Button color="secondary">Submit</Button>
        </InputGroupAddon>
      </InputGroup>
      </div>
    );
  }
}

export default App;
