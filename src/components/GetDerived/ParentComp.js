import React, { Component } from 'react'
import ChildComp from './ChildComp';
export class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { 'name':'shan', 'country':'UK', 'current': '', 'count': 0}
    }
  }
  incCounter = () => { 
    this.setState({ data: { ...this.state.data, count: this.state.data.count + 1 }})
  }
  
  render() {
    return (
      <div className="container">
      <h5 className="col-sm-12">getDerivedStateFromProps() : Static method</h5><br /><br />
        <div className="bg-info" style={{ 'padding': '10px', 'color': '#fff'}}>
          <h3>Parent Comp: </h3>
          <div className="text-left" >
            Name: <b>{this.state.data.name}</b><br/><br />
            Native Country: <b>{this.state.data.country}</b><br /><br />
            Current Country: <b>{this.state.data.current}</b><br /><br />
            Count : <b>{this.state.data.count}</b><br /><br />
          </div>
          <button className="btn btn-danger" onClick={this.incCounter}>Click ++ Count</button>
        </div>
        <ChildComp data={this.state.data}/>

        <ul className="mt-4 text-left">
        <li>Updating nested state property</li>
        <li>getDerivedStateFromProps method always execute before render</li>
        <li>getDerivedStateFromProps method excute for intitial load and re-render both</li>
        </ul>
    </div>
    )
  }
}

export default ParentComp
