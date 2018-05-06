import React, { Component } from 'react';


class About extends Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    return (
      <div>
        {console.log(this.props.location)}
        {this.props.location.state && <p>{JSON.stringify(this.props.location.state)}</p>}
        
        <p>adada</p>
      </div>
    );
  }
}

export default About;
