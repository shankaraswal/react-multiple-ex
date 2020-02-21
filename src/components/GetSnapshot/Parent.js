import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:11
    }
  }
  doInc = () => { 
    this.setState({
      count:this.state.count+2
    })
  }
  render() {
    return (
      <div className="container">
      <h5 className="col-sm-12">getDerivedStateFromProps() : Static method</h5><br /><br />
        <div className="bg-info" style={{ 'padding': '10px', 'color': '#fff'}}>
          <h3>Parent Count: {this.state.count}</h3>
          <button className="btn btn-warning" onClick={this.doInc}>Click to inc</button>
        </div>
        <Child data={this.state.count} />
        <ul>
          <li></li>
        </ul>
        </div>
    )
  }
}
