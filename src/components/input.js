import React, { Component } from 'react';


class Input extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            task: ""
        }
    }

  onEventChange = (event) =>
  {
        this.setState({
            [event.target.name]: event.target.value 
        });
        console.log(this.state.task);
        
  }
  render() {
    return (
        <form>
            <span>Task: </span>
            <input type="text" name="task" onChange={this.onEventChange} value={this.state.task}/>
            <button onClick={(event)=>{this.props.submit(event,this.state.task)}}>Submit</button>
        </form>
    );
  }
}

export default Input;
