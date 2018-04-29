import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./components/input"
import List from "./components/list"


class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      task : []
    }
  }

  onSubmit = (event,input) =>{
        event.preventDefault();
        const task1 = [...this.state.task];
        task1.push(input);
        this.setState({
          task:task1
        }, ()=>{
        console.log(this.state.task);

        })
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Input submit={this.onSubmit}/>
        <List task={this.state.task}/>
      </div>
    );
  }
}

export default App;
