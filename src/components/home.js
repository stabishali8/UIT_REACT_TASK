import React, { Component } from 'react';


class Home extends Component {
  render() {
    return (
        <form>
            <span>Task: </span>
            <input type="text" name="task"/>
        </form>
    );
  }
}

export default Home;
