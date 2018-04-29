import React, { Component } from 'react';


class Contact extends Component {
  render() {
    return (
        <form>
            <span>Task: </span>
            <input type="text" name="task"/>
        </form>
    );
  }
}

export default Contact;
