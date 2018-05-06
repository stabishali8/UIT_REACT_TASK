import React, { Component } from 'react';


class Contact extends Component {
  constructor(props)
  {
      super(props);
  }
  render() {
    return (
        <div>
          <button onClick={()=>{
              this.props.history.push({
                pathname:'/about',
                state:{'name':'tabish','age':'age'}
              })
            }}>Go to Function</button>
        </div>
    );
  }
}

export default Contact;
