import React, { Component } from 'react';


class List extends Component {

  render() {
      let print = this.props.task.map((currentTask)=>{
          return <div>
              {currentTask}
          </div>
      })
    return (
        <div>
            {print}
        </div>
    );
  }
}

export default List;
