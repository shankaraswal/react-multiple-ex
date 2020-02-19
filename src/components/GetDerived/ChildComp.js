import React, { Component } from 'react'

export default class ChildComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comp: 'get derived example',
      childCounter: 0
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('------------------------------------');
    console.log('getDerivedStateFromProps method', nextProps, prevState)
    
    return {
      childCounter:nextProps.data.count*11
    }
  }
  render() {
   console.log('------------------------------------');
   console.log('render method')
    return (
        <div className="bg-warning mt-4" style={{ 'padding': '10px', 'color': '#fff'}}>
        
        Count props comming from parent: {this.props.data.count}
        <h4>Child Component</h4>
          Child Counter: {this.state.childCounter}
      </div>
    )
  }
}
