import React, { Component } from 'react'
import HocComp from './HocComp'

const incBy = {
  icount: 10,
  cname:"A"
};

class WrapCompA extends Component {
  render() {
    return (
      <div>
        <h3 onClick={this.props.clickCount} >
           {this.props.name}
        </h3>
        <p>Increment By {this.props.incby}</p>
          
        <h4>Result: {this.props.count}</h4>
      </div>
    
    );
  }
}

export default HocComp(WrapCompA, incBy);