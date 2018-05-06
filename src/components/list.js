import React, { Component } from 'react';


class List extends Component {

  render() {
      let print = this.props.task.map((currentTask)=>{
          return <div>
              {currentTask}&nbsp;<button>Update</button>&nbsp;<button onClick={()=>{this.props.delete(currentTask)}}>Delete</button>
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
